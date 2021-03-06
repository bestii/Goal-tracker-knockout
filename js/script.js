//To highlight the row when checkbox is clicked
$('#goalTable').on('click','.test', function() {
  $(this).parent().parent().toggleClass("highlight")
});


$( document ).ready(function() {

    function GoalModel(){
        var self=this;
        self.data = ko.observableArray([
          { "isSelected":false,"name": "Javascript","type": "Type 1", "deadline": "2016-08-12" },
          { "isSelected":false,"name": "Bootstrap","type": "Type 4","deadline": "2016-08-01"},
          { "isSelected":false,"name": "Ajax","type": "Type 3","deadline": "2016-08-04"}
        ]);

        self.name = ko.observable();
        self.type = ko.observable();
        self.deadline = ko.observable();
        self.isSelected = ko.observable(false);

        // self.selectThing = function(item, event) {
        //      $(event.target).parent().parent().toggleClass('highlight');
        // };

        self.addGoal=function(){
          console.log(self.deadline());
          if(self.name()==""){
            alert("Enter name for goal");
          }else if(self.type()=="Choose Type"){
            alert("Select Type for goal");
          }else if(self.deadline()==undefined){
            alert("Choose deadline for goal");
          }else{
            self.data.push({ "isSelected":false,"name": self.name(),"type": self.type(),"deadline": self.deadline()});
            self.name("");
            self.type("");
            self.deadline("");
          }
        }

        self.deleteGoal=function(){
          var counter=0;
          if(self.data().length>0){
            for(var i=0;i<self.data().length;i++){
                if(self.data()[i].isSelected==true){
                  //self.data().splice(i,1);
                  self.data.remove(self.data()[i]);
                  i--;
                  counter++;
                }
            }
            if(counter==0){
              alert("Please select a goal to DELETE !!!!");
            }
          }else{
             alert("No goal to DELETE !!!!");
          }
        }
    };

    ko.applyBindings(new GoalModel());


});
