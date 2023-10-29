package com.example.authdemo;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
public class helloController {

    @GetMapping("/hello")
    public ResponseEntity<Map<String, String>> getMessage() {
        Map<String, String> response = new HashMap<>();
        response.put("message", "Hello from Spring Boot!");
    return ResponseEntity.ok(response);
    }
}
