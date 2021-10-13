# DimaticaCode

## Resume

The approach to the solution is an application in MVC API REST applying SOLID principles. The time spent will not exceed 4 hours. This implies that many things will be only explained here.

## Instructions

Clone the repository open with visual studio 2019 and launch the solution. 

If npm is not installed install it and do npm install on the solution. 

Go to baseUrl/Duty.

## Descriptions

### Database 

It is connected to a generic mongo cloud user.

Mongo has been used by requirement.

A general repository was implemented that accepted a T type so that it could be reused per entity without reprogramming.

### Entities

Own entities and DTOs for bd are defined, all DTOs inherit from a base parent. This allows to propagate authentication, localicer, etc.

### Automapper

This allows to unify changes between entities and DTOs. It also centralizes data changes such as IDs or Dates.

### Transversal.

Helpers such as Log, encrption, error handling and business exceptions, etc.

### Services

Business logic are services that implement repositories and other services by necessity. 

Here all the own transformations of the operation would be carried out.

### Controllers

Part exposed for consumption.

I am missing things like: 
- Authentication tags
- Label of permissions by entity and action

### Front

Implementing HTTPService calls from a common ApiService

ApiService for the entity

Logic service for the entity

Module by functionality

Module by atomic part of the screen, e.g. the table

Logic in the parent component

Use of : 

- Inputs
- Outputs
- FormControls and validators


## TODOs

### Database

The implementation is not real, it is only the structure and an example.

### Entities

Do not implement the real locator service or authentication service

### Automapper

Does not have the external method for ID and date encryption

### Transveral

Encryption system, error log and business error log. Log for business critical operations. 

### Services

Control that dependency injections are real and do not fail. Do it securely

### Controllers

Response object within the body of the http response.

cstomized error handling for the output

implementation of the tags

### Front

I have not applied CSS
