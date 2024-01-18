MongoDB - Day - 2;

1.Find all the topics and tasks which are thought in the month of October?

   db.task.aggregate([
    {
        $match: {
            deadline: {$gte: ISODate('2020-10-01') , $lte : ISODate('2020-10-31')}
        }
    },
    {
        $project: {
            _id: 0 ,
            task_id: 1,
            task_name: 1,
            deadline : 1
        }
    },
    {
        $unionWith:{
            coll: "topics",
            pipeline: [
                {
                    $match: {
                        date: {$gte: ISODate('2020-10-01') , $lte : ISODate('2020-10-31')}
                    }
                },
                {
                    $project: {
                        _id: 0 ,
                        topic_id: 1,
                        topic_name: 1,
                        date : 1
                    }
                },
            ]
        }
    }
   ]).pretty();

   Output:
   {
     "task_id" : 1,
     "task_name" : "Responsive Web Designs",
     "deadline" : ISODate("2020-10-01T00:00:00Z")
   }
   {
     "task_id" : 2,
     "task_name" : "DOM",
     "deadline" : ISODate("2020-10-07T00:00:00Z")
   }
   {
     "task_id" : 3,
     "task_name" : "Shopping Cart",
     "deadline" : ISODate("2020-10-13T00:00:00Z")
   }
   {
     "task_id" : 4,
     "task_name" : "Library Management",
     "deadline" : ISODate("2020-10-21T00:00:00Z")
   }
   {
     "task_id" : 5,
     "task_name" : "Zen Class DB",
     "deadline" : ISODate("2020-10-29T00:00:00Z")
   }
   {
     "topic_id" : 1,
     "topic_name" : "JavaScript",
     "date" : ISODate("2020-10-14T00:00:00Z")
   }
  {
     "topic_id" : 2,
     "topic_name" : "React.js",
     "date" : ISODate("2020-10-21T00:00:00Z")
  }
  {
     "topic_id" : 3,
     "topic_name" : "MySQL",
     "date" : ISODate("2020-10-26T00:00:00Z")
  }

 2.Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020?
    
        db.company.find({date: {$gte: ISODate('2020-10-15') , $lte : ISODate('2020-10-31') }}).pretty();
   
    Output:
    {
        "_id" : ObjectId("65a2cff69e7e02a3b67eb4b8"),
        "drive_id" : 4,
        "company_name" : "ZOHO",
        "date" : ISODate("2020-10-16T00:00:00Z"),
        "students" : [
                "Vishal"
        ]
    }
    {
        "_id" : ObjectId("65a2cff69e7e02a3b67eb4b9"),
        "drive_id" : 5,
        "company_name" : "IBM",
        "date" : ISODate("2020-10-23T00:00:00Z"),
        "students" : [
                "Josh"
        ]
    }

3.Find all the company drives and students who are appeared for the placement?

  db.company.aggregate([
    {
        $lookup: {
            from: "users",
            localField: "students",
            foreignField: "user_name",
            as : "Placed"
        }
    },
    {
        $unwind: {
            path: "$Placed"
        }
    },
    {
        $project: {
            _id: 0,
            company_name: 1,
            date: 1,
            "Placed.user_id" : 1,
            "Placed.user_name": 1,
            "Placed.email": 1
        }
    }
  ]).pretty();

Output:

{
    "company_name" : "Google",
    "date" : ISODate("2020-10-02T00:00:00Z"),
    "Placed" : {
            "user_id" : 1,
            "user_name" : "Hariharan",
            "email" : "hari45@gmail.com"
    }
}
{
    "company_name" : "Google",
    "date" : ISODate("2020-10-02T00:00:00Z"),
    "Placed" : {
            "user_id" : 3,
            "user_name" : "Murali",
            "email" : "murali5@gmail.com"
    }
}
{
    "company_name" : "Microsoft",
    "date" : ISODate("2020-10-07T00:00:00Z"),
    "Placed" : {
            "user_id" : 2,
            "user_name" : "Mafrook",
            "email" : "mafrook76@gmail.com"
    }
}
{
    "company_name" : "ZOHO",
    "date" : ISODate("2020-10-16T00:00:00Z"),
    "Placed" : {
            "user_id" : 4,
            "user_name" : "Vishal",
            "email" : "vishal37@gmail.com"
    }
}
{
    "company_name" : "IBM",
    "date" : ISODate("2020-10-23T00:00:00Z"),
    "Placed" : {
            "user_id" : 5,
            "user_name" : "Josh",
            "email" : "josh45@gmail.com"
    }
}

4.Find the number of problems solved by the user in codekata?

  db.users.aggregate([
     {
       $unwind: "$problem_id"
     },
     {
       $lookup: {
         from: "codekata",
         localField: "problem_id",
         foreignField: "problem_id",
         as: "solved_problems"
       }
     },
     {
       $group: {
         _id: "$user_id",
         user_name: { $first: "$user_name" },
         solved_problems_count: { $sum: 1 }
       }
     },
     {
       $project: {
         _id: 0,
         user_id: "$_id",
         user_name: 1,
         solved_problems_count: 1
       }
     }
   ])

Output:

{ "user_name" : "Mafrook", "solved_problems_count" : 2, "user_id" : 2 }
{ "user_name" : "Murali", "solved_problems_count" : 2, "user_id" : 3 }
{ "user_name" : "Josh", "solved_problems_count" : 4, "user_id" : 5 }
{ "user_name" : "Hariharan", "solved_problems_count" : 3, "user_id" : 1 }
{ "user_name" : "Vishal", "solved_problems_count" : 2, "user_id" : 4 }


5.Find all the mentors with who has the mentee's count more than 15?

   db.mentor.find({mentees_count:{ $gt: 15}}).pretty();

 Output: 
 {
    "_id" : ObjectId("65a2d00d9e7e02a3b67eb4ba"),
    "mentor_id" : 1,
    "mentor_name" : "Pugazh",
    "mentees_count" : 16
}
{
    "_id" : ObjectId("65a2d00d9e7e02a3b67eb4bb"),
    "mentor_id" : 2,
    "mentor_name" : "Swetha",
    "mentees_count" : 18
}
{
    "_id" : ObjectId("65a2d00d9e7e02a3b67eb4bd"),
    "mentor_id" : 4,
    "mentor_name" : "Sangeetha",
    "mentees_count" : 18
}
{
    "_id" : ObjectId("65a2d00d9e7e02a3b67eb4be"),
    "mentor_id" : 5,
    "mentor_name" : "Kavin",
    "mentees_count" : 16
}

6.Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020?

  db.attendance.aggregate([
      {
        $match: {
          attend: false
        }
      },
      {
        $lookup: {
          from: "task",
          localField: "user_id",
          foreignField: "user_id",
          as: "user_tasks"
        }
      },
      {
        $match: {
          "user_tasks.deadline": { $gte: ISODate('2020-10-15'), $lte: ISODate('2020-10-31') },
          "user_tasks.submitted": false
        }
      },
      {
        $lookup: {
          from: "users",
          localField: "user_id",
          foreignField: "user_id",
          as: "user_details"
        }
      },
      {
        $project: {
          _id: 0,
          user_id: "$user_id",
          user_name: "$user_details.user_name"
        }
      }
    ])
  
Output:

{ "user_id" : 2, "user_name" : [ "Mafrook" ] }
{ "user_id" : 3, "user_name" : [ "Murali" ] }



---------------x----------------x------------------x---------------x----------------x----------------------