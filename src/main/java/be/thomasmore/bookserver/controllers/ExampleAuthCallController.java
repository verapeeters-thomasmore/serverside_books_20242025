package be.thomasmore.bookserver.controllers;

import be.thomasmore.bookserver.model.User;
import be.thomasmore.bookserver.model.dto.AuthenticationDTO;
import be.thomasmore.bookserver.model.dto.UserDTO;
import be.thomasmore.bookserver.repositories.UserRepository;
import io.swagger.v3.oas.annotations.Operation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.security.Principal;
import java.util.Optional;

@RestController
@RequestMapping("/api")
@Slf4j
public class ExampleAuthCallController {


    @Operation(summary = "example of an authenticated GET request.",
            description = "This request will only succeed if a user is authenticated. ")
    @GetMapping("/example_auth_request")
    public String authenticatedRequest(Principal principal) {
        log.info("##### example authenticated request: ");
        return "example authenticated request: This request will only succeed if a user is authenticated. ";
    }

}
