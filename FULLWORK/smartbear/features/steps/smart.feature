Feature: SmartBear Login
  Scenario: Navigate to SmartBear and login
     Given  chrome is launched
     When we enter username  password
     Then we login
     Then we select view all orders
     Then we select view all products
     Then we select order