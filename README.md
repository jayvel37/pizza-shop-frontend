# pizza-shop-frontend
React frontend for pizza shop app where owner can update toppings and chefs can update pizza menu with new pizzas. 

Logins:

- Admin user: admin@pizzas.com

- Admin Password: adminPassword

- Chef user: chef@pizzas.com

- Chef password: pizzaPassword

Admin will take user to the owner/admin page where both toppings and pizzas can be edited.

Chef will login user as a chef where only pizzas can be updated.

Tests:

- NOTE: There is no sign out functionality implemented. To login as another user, please re-enter 
- http://pizzas.jayvelazco-projects.com/ into your browser.

- NOTE: This has been deployed using AWS EC2 and an S3 bucket. No instructions for running locally.

- Click the add button to open the modal window to enter new topping/pizza. (Duplicates not allowed)
- Click the edit button to open the modal window to edit topping/pizza.
- Click the delete button to delete a topping/pizza.
- Note: Click the submit button in modal window with empty field(s) to get appropriate popup prompting user to enter field.
- Note ^: Error popups for missing fields work for empty topping, pizza name and pizza topping. Together or individual fields.