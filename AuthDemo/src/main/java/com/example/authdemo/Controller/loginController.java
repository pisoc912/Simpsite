package com.example.authdemo.Controller;

import com.example.authdemo.Entity.Customer;
import com.example.authdemo.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class loginController {

    @Autowired
    CustomerRepository customerRepository;

    @Autowired
    BCryptPasswordEncoder passwordEncoder;

    @GetMapping("/account")
    public String Account(){
        return "Here is Account page";
    }

    @RequestMapping("/login")
    public Customer getUserDetailsAfterLogin(Authentication authentication){
        List<Customer> customerList = customerRepository.findByEmail(authentication.getName());
        if(customerList.size() > 0){
            return customerList.get(0);
        }else{
            return null;
        }
    }

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody Customer customer){
        Customer savedCustomer = null;
        ResponseEntity response = null;
        try{
            String hashPwd = passwordEncoder.encode(customer.getPassword());
            customer.setPassword(hashPwd);
            savedCustomer = customerRepository.save(customer);
            if(savedCustomer.getId() > 0){
                response = ResponseEntity
                        .status(HttpStatus.CREATED)
                        .body("Given user details are successfully registered.");
            }
        } catch (Exception e) {
            response = ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("An exception occured due to" + e.getMessage());
        }
        return response;
    }



}
