package com.example.backend.auth;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.backend.config.JwtService;
import com.example.backend.user.Role;
import com.example.backend.user.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
	
	private final UserRepository repository;
	private final PasswordEncoder passwordEncoder;
	private final JwtService jwtService;
	private final AuthenticationManager authenticationManager;
	
	public AuthenticationResponse register(RegisterRequest request) {
		var user = User.builder()
				.username(request.getUsername())
				.password(passwordEncoder.encode(request.getPassword()))
				.build();
		repository.save(user);
		var jwtToken = jwtService.generateToken(user);
		return AuthenticationResponse.builder()
			.token(jwtToken)
			.build();
	}

	public AuthenticationResponse authenticate(AuthenticationRequest request) {
		authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(
					request.getEmail(),
					request.getPassword()
				)
			);
		var user = repository.findByEmail(request.getEmail())
			.orElseThrow();
		var jwtToken = jwtService.generateToken( user);
		return AuthenticationResponse.builder()
				.token(jwtToken)
				.build();;
	}
	

}
