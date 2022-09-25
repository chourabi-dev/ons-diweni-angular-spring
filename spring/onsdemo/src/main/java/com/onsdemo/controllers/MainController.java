package com.onsdemo.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.onsdemo.controllers.models.UserModel;
import com.onsdemo.controllers.responses.JsonResponse;

@RestController
@RequestMapping("/main")
public class MainController {
	
	
	@GetMapping("/say-hello")
	public String sayHelloToClient() {
		
		// ...
		return "hello client";
	}
	
	// request params !!!
	
	
	@GetMapping("/somme")
	public int somme(  @RequestParam( name="x" , required = true )  int x,@RequestParam( name="y" , required = true ) int y ) {
		int s = x + y;
		return s;
	}
	
	
	// variable de path
	
	//  /movies/details/1200
	//  /movies/details/500
	//  /movies/details/320
	
	
	@GetMapping("/movies/details/{id}")
	public String details( @PathVariable int id ) {
		 // SELECT * FROM MOVIE WHERE ID = ?
		
		
		System.out.println(id);
		
		
		return "Searching...";
	}
	
	
	/**************************************************************************************************************/
	@PostMapping("/user/add")
	public void addUser( @RequestBody UserModel data  ) {
		
		
		
		// name ?
		
		// email ???
		
		// model de recepetion des données !!!
		
		System.out.println(data.getName());
		System.out.println(data.getEmail());
		
		
		// entity
		// User u = new User(  ) 
		
		// database.save(u)
		
		
	}
	
	
	
	// ResponseEntity !!!
	
	@GetMapping("/get-my-role")
	public  ResponseEntity<?> getUserRole(){
		
		boolean ok = true;
		
		if( ok ) {
			JsonResponse res = new JsonResponse();
			
			res.setSuccess(true);
			res.setMessage( "your role is admin" );
			
			
									// ok not found error ...
			
									// many types !!
			return ResponseEntity.status( 200 ).body( res );
			
			
		}else {
			
			
			
			return ResponseEntity.status( 200 ).body( "Oups" );
		}
		
		
		
	}
	
	
	
	
	

}
