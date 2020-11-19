
# secret-santa-generator

Secret Santa Generator that emails each participant who they are Santa for.

  
  

## To Run

1. npm install

2. create `.env` file in main directory and place environment variables `EMAIL` and `EMAIL_PASSWORD` for the email and password you will use to send the secret santa emails. Important note, the email must be a gmail account. To allow access you need to turn on Less Secure Apps. An example .env is below

		EMAIL=secretsanta@gmail.com
        EMAIL_PASSWORD=password123

3. create `participants.json` file in main directory. The structure of the file is shown below

		[
			{
				"name" : "persons name"
				"email" : "persons email"
			},
			...
		]

4. To run use command `npm run start`