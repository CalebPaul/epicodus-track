//Math Logic
var csharp = 0;
var jav = 0;
var php = 0;
var ruby = 0;
var design = 0;

$( document ).ready(function() {
  $("#quiz").submit(function(event) {

    var q1 = $("input:radio[name=question1]:checked").val();
    if ( q1 === "bigbiz" ) { csharp ++; jav ++; }
      else if (q1 === "mobile" ) { jav ++; }
      else if (q1 === "rails") { ruby ++; }

    var q2 = $("input:radio[name=question2]:checked").val();
    if ( q2 === "design" ) { design ++; }
      else if (q2 === "mobile" ) { jav ++; }
      else if (q2 === "rails") { ruby ++; }


  console.log("user selected: " + q1);
  console.log("c#: " + csharp);
  console.log("java: " + jav);
  console.log("php: " + php);
  console.log("ruby: " + ruby);
  console.log("design: " + design);
  event.preventDefault();
  });
});
