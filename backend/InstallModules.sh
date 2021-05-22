#!/bin/bash

#####################################################
# install the dependencies that this project needs  #
#####################################################

# Production dependencies:
npm i express dotenv nodemailer nodemailer-smtp-transport cors

# Development dependences:
read -p "Do you want to install the development dependencies? (yes/no) " user

if [ "$user" == "yes" ] || [ "$user" == "y" ] || [ "$user" == "YES" ]; then
	echo "Installing development dependencies . . ."
	npm i nodemon -D
else
	echo "Development dependencies will not be installed"
	sleep 2; clear
fi
