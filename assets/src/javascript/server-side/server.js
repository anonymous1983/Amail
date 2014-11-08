var express = require('express'),
    app     = express(),
    Sequelize = require('sequelize'),
    sequelize = new Sequelize('amail_db', 'root', 'root', {
      dialect: "mysql", // or 'sqlite', 'postgres', 'mariadb'
      port: 8889, // or 5432 (for postgres)
      host: 'localhost'
    }),
    prettyjson = require('prettyjson'),
    prettyjson_options = {
      noColor: true
    };
 
sequelize
  .authenticate()
  .complete(function(err) {
    if (!!err) {
      console.log('Unable to connect to the database:', err)
    } else {
      console.log('Connection has been established successfully.')
    }
  });

var User = sequelize.define('User', {
      id: Sequelize.INT,
      user_login: Sequelize.STRING,
      user_pass: Sequelize.STRING,
      user_nicename: Sequelize.STRING,
      user_email: Sequelize.STRING,
      user_date_birthday: Sequelize.STRING,
      user_login: Sequelize.STRING
    },{
      tableName: 'am_users', // this will define the table's name
      timestamps: false           // this will deactivate the timestamp columns
    });


User
  .find({ where: { user_email: 'anab.tn@gmail.com' } })
  .complete(function(err, johnDoe) {
    if (!!err) {
      console.log('An error occurred while searching for John:', err)
    } else if (!johnDoe) {
      console.log('No user with the email "anab.tn@gmail.com" has been found.')
    } else {
      console.log('Hello ' + johnDoe.user_display_name + '!')
      console.log('All attributes of john:', johnDoe.values)
    }
  })

//console.log(User);


