# Mock Backend Library, JSON-SERVER

Perform following steps to run backend server (json-server).

## Install of JSON-SERVER

Go to your CLI or integrated terminal of an IDE. Execute the following command to globally intstall json-server (node module) on your computer:

$ `npm install -g json-server`

## Prepare working directory for JSON-SERVER

Perform following steps (1 to 4):

1. **Create a directory** with any name, preferably namely, "json-server-wd" (refered to as working directory for the json-server)
2. **Create a file** with any name and json exension, preferably namely, "initial-tasks-db.json" in directory "json-server-wd". (you will use this file name when you start json-server, in the next section)
3. **Copy json data** in the created file. To do so, open the file (namely, "initial-tasks-db.json", created in previous step) in any IDE and paste the following contents in it.

```json
{
  "tasks": [
    {
      "id": "101",
      "title": "Going to admission office",
      "createDate": "20.10.2023",
      "done": false,
      "trash": false
    },
    {
      "id": "102",
      "title": "Visit library",
      "createDate": "16.10.2023",
      "done": false,
      "trash": false
    },
    {
      "id": "103",
      "title": "Attending seminar",
      "createDate": "19.10.2023",
      "done": false,
      "trash": false
    },
    {
      "id": "104",
      "title": "Taking breakfast",
      "createDate": "15.10.2023",
      "done": true,
      "trash": false
    },
    {
      "id": "105",
      "title": "Meet batch advisor",
      "createDate": "13.09.2023",
      "done": true,
      "trash": false
    },
    {
      "id": "106",
      "title": "Community service",
      "createDate": "29.10.2023",
      "done": true,
      "trash": false
    }
  ]
}
```

4. **Backup json file** also after copying above content in "initial-tasks-db.json". Create a backup copy of this file and name it as "initial-tasks-db-BACKUP-noUser.json". You will need it later.

## Start the JSON-SERVER

Go to your CLI or integrated terminal of an IDE. Then:

1. First navigate the working directory for the json-server which you named previously as "json-server-wd".

   (or alternatively in windows, open this working directory "json-server-wd" in the file explorer and write `cmd` in the address bar, and then press enter. Doing so, will open window's command prompt, which will be automatically navigated to this directory)

2. Secondly, in the navigated terminal, execute the following command to start json-server

   $ `json-server --watch initial-tasks-db.json -p 5000`

   After execution of the above command, json-server will print the exposed API link/s in the termial/CLI.

3. Copy the exposed API link and paste it in the address bar of any web browser on the same computer. You will see json, replied by the server.

Note: Use Chrome's Network tab/throtling to delay requests instead of --delay CLI option. For further details, please refer the official docs of json-server at [https://github.com/typicode/json-server](https://github.com/typicode/json-server)
