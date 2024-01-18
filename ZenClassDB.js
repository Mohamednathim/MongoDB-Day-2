use ZenClass;

// Users

db.users.insertMany([
    {
        user_id: 1,
        user_name: "Hariharan",
        email: "hari45@gmail.com",
        mentor_id: 1,
        problem_id: [1,3,5]
    },
    {
        user_id: 2,
        user_name: "Mafrook",
        email: "mafrook76@gmail.com",
        mentor_id: 2,
        problem_id: [2,3]

    },
    {
        user_id: 3,
        user_name: "Murali",
        email: "murali5@gmail.com",
        mentor_id: 3,
        problem_id: [1,5]
    },
    {
        user_id: 4,
        user_name: "Vishal",
        email: "vishal37@gmail.com",
        mentor_id: 2,
        problem_id: [2,5]
    },
    {
        user_id: 5,
        user_name: "Josh",
        email: "josh45@gmail.com",
        mentor_id: 5,
        problem_id: [1,2,3,4]
    }
])

// Codekata

db.codekata.insertMany([
    {
        problem_id: 1,
        problem_name: "Factorial",
        difficulty: "Easy",
        date_added: ISODate('2020-10-26')
    },
    {
        problem_id: 2,
        problem_name: "Vowel Count",
        difficulty: "Medium",
        date_added: ISODate('2020-11-11')
    },
    {
        problem_id: 3,
        problem_name: "Bubble Sort",
        difficulty: "Difficult",
        date_added: ISODate('2020-10-07')
    },
    {
        problem_id: 4,
        problem_name: "Palindrome",
        difficulty: "Easy",
        date_added: ISODate('2020-11-18')
    },
    {
        problem_id: 5,
        problem_name: "Leap year",
        difficulty: "Medium",
        date_added: ISODate('2020-10-01')
    }
])

// Attendance

db.attendance.insertMany([
    {
        user_id: 1,
        topic_id: 1,
        attend : true
    },
    {
        user_id: 2,
        topic_id: 2,
        attend : false
    },
    {
        user_id: 3,
        topic_id: 3,
        attend : false
    },
    {
        user_id: 4,
        topic_id: 4,
        attend : true
    },
    {
        user_id: 5,
        topic_id: 1,
        attend : true
    }
])

// Topics

db.topics.insertMany([
    {
        topic_id: 1,
        topic_name: "JavaScript",
        date: ISODate('2020-10-14')
    },
    {
        topic_id: 2,
        topic_name: "React.js",
        date: ISODate('2020-10-21')
    },
    {
        topic_id: 3,
        topic_name: "MySQL",
        date: ISODate('2020-10-26')
    },
    {
        topic_id: 4,
        topic_name: "MongoDB",
        date: ISODate('2020-11-04')
    },
    {
        topic_id: 5,
        topic_name: "Node.js",
        date: ISODate('2020-11-10')
    }
])

// Tasks

db.task.insertMany([
    {
        task_id: 1,
        topic_id: 1,
        user_id: [1, 3, 4, 5],
        task_name: "Responsive Web Designs",
        deadline: ISODate('2020-10-01'),
        submitted: true
    },
    {
        task_id: 2,
        topic_id: 1,
        user_id: [2, 3, 4],
        task_name: "DOM",
        deadline: ISODate('2020-10-07'),
        submitted: false
    },
    {
        task_id: 3,
        topic_id: 2,
        user_id: [3, 4],
        task_name: "Shopping Cart",
        deadline: ISODate('2020-10-13'),
        submitted: true
    },
    {
        task_id: 4,
        topic_id: 5,
        user_id: [1, 2, 3],
        task_name: "Library Management",
        deadline: ISODate('2020-10-21'),
        submitted: false
    },
    {
        task_id: 5,
        topic_id: 4,
        user_id: [1, 4, 5],
        task_name: "Zen Class DB",
        deadline: ISODate('2020-10-29'),
        submitted: true
    }
]);

// Company-Drives

db.company.insertMany([
    {
        drive_id: 1,
        company_name : "Google",
        date : ISODate('2020-10-02'),
        students: ["Hariharan","Murali"]
    },
    {
        drive_id: 2,
        company_name : "Microsoft",
        date : ISODate('2020-10-07'),
        students: ["Mafrook"]
    },
    {
        drive_id: 3,
        company_name : "TCS",
        date : ISODate('2020-10-09'),
        students: "null"
    },
    {
        drive_id: 4,
        company_name : "ZOHO",
        date : ISODate('2020-10-16'),
        students: ["Vishal"]
    },
    {
        drive_id: 5,
        company_name : "IBM",
        date : ISODate('2020-10-23'),
        students: ["Josh"]
    }
    
])

// Mentors

db.mentor.insertMany([
    {
        mentor_id: 1,
        mentor_name: "Pugazh",
        mentees_count : 16
    },
    {
        mentor_id: 2,
        mentor_name: "Swetha",
        mentees_count : 18
    },
    {
        mentor_id: 3,
        mentor_name: "Shruthi",
        mentees_count : 15
    },
    {
        mentor_id: 4,
        mentor_name: "Sangeetha",
        mentees_count : 18
    },
    {
        mentor_id: 5,
        mentor_name: "Kavin",
        mentees_count : 16
    },
])