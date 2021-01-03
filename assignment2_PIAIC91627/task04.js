var totalMarks = 300
var marksObtained = 219
var Percentage = (marksObtained / totalMarks) * 100
if(Percentage >= 80){
    Grade = "A-one"
    Remarks = "Excellent"
    }
if(Percentage >= 70){
        Grade = "A"
        Remarks = "Good"
    }
    else if(Percentage >= 60){
        Grade = "B"
        Remarks = "You need to improve"
    }
    document.write("Total marks : 300" + "<br>")
    document.write("Marks obtained : " + marksObtained + "<br>")
    document.write("Percentage :" + Percentage + "%" + "<br>")
    document.write("Grade : " + Grade + "<br>")
    document.write("Remarks : " + Remarks)