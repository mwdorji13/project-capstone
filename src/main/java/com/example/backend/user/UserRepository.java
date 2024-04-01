package com.example.backend.user;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetails;

public interface UserRepository extends JpaRepository<User, Integer> {
	Optional<User> findByEmail(String email);

	void save(UserDetails user);
}
