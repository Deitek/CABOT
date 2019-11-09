// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

chrome.runtime.onInstalled.addListener(function() {
 
    console.log("Entry Point of the extension");

    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
      var url = tabs[0].url;
      //here we have the url
      console.log(url);
    });
    var db = setupDatabase();
    if (db) {
        alert('db ' + db);


       /*
        //Testing insert
        var userId = '1';
        var correlationId = '1';
        var ipAddress = '1';
        var searchSentence = '1';
        var searchResult = '1';
        var searchOcurrencies = '1';
        var searchDatetime = '1';
        insert(userId, correlationId, ipAddress, searchSentence, searchResult, searchOcurrencies, db, function(transaction, result) {
            alert('result ' + result);
        });
*/

        /*
         //Testing select        
         select(db, function(transaction, result) {
             var output = '';
            for(var i=0; i<result.rows.length; i++) {
                var row = result.rows.item(i)
                debugger;
                output += '<tr><td>' + row['ID'] + '</td><td>' + row['USER_ID'] + '</td><td>' + row['SEARCH_SENTENCE'] + '</td><td>' + row['SEARCH_DATETIME'] + '</td></tr>';
                alert(output);
            }
        });
*/
    }

});

function setupDatabase() {
    try {
        if (!window.openDatabase) {
            alert('not supported');
            return null;
        }
        else {
            var shortName = 'mydatabase';
            var version = '1.0';
            var displayName = 'My Important Database';
            var maxSize = 65536; // in bytes
            var db = openDatabase(shortName, version, displayName, maxSize);
            db.transaction(createTables);
            return db;
        }
    } 
    catch (e) {
        // Error handling code goes here.
        if (e == 2) {
            // Version number mismatch.
            alert("Invalid database version.");
        } else {
            alert("Unknown error " + e + ".");
        }
        return null;
    }
    alert("Database is: "+db);
};

function select(db, successCallback) {
    var query = selectQueryBuilder();
    db.transaction(
        function(transaction) {
            transaction.executeSql(
                  query
                , []
                , successCallback
                , errorHandler    
            );
        }
    );
};

function insert(userId, correlationId, ipAddress, searchSentence, searchResult, searchOcurrencies, db, successCallback) {
    var query = insertQueryBuilder(userId, correlationId, ipAddress, searchSentence, searchResult, searchOcurrencies);
    debugger;
    db.transaction(
        function(transaction) {
            transaction.executeSql(
                  query
                , []
                , successCallback
                , errorHandler
            );
        }
    );
};

function createTables(t) {
    t.executeSql(CREATE_TABLE_INTERACTION_QUERY, [], dataHandler, errorHandler);
};

function dataHandler(transaction, results) {
    debugger;
};

function errorHandler(transaction, error) {
    // error.message is a human-readable string.
    // error.code is a numeric error code
    alert('Oops.  Error was ' + error.message + ' (Code ' + error.code + ')');

    // Handle errors here
    var we_think_this_error_is_fatal = true;
    if (we_think_this_error_is_fatal) return true;
    return false;
};

const CREATE_TABLE_INTERACTION_QUERY = "CREATE TABLE IF NOT EXISTS INTERACTIONS"
    + "(ID INTEGER PRIMARY KEY AUTOINCREMENT"
    + ", USER_ID INTEGER"
    + ", CORRELATION_ID TEXT"
    + ", IP_ADDRESS	TEXT"
    + ", SEARCH_SENTENCE TEXT"
    + ", SEARCH_RESULT BLOB"
    + ", SEARCH_OCURRENCIES	BLOB"
    + ", SEARCH_DATETIME TEXT);";

function selectQueryBuilder() {
    return 'SELECT * FROM INTERACTIONS;'
};

function insertQueryBuilder(userId, correlationId, ipAddress, searchSentence, searchResult, searchOcurrencies) {
    var date = new Date();
    debugger;
    return `INSERT INTO INTERACTIONS`
        + `(USER_ID, CORRELATION_ID, IP_ADDRESS, SEARCH_SENTENCE, SEARCH_RESULT, SEARCH_OCURRENCIES, SEARCH_DATETIME)`
        + ` VALUES (${userId}, ${correlationId}, '${ipAddress}', '${searchSentence}', ${searchResult}, ${searchOcurrencies}, '${(new Date()).toISOString()}')`;
};
