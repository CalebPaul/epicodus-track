//Math Logic
var csharp = 0;
var jav = 0;
var ruby = 0;
var design = 0;
var course = "";

$( document ).ready(function() {
  $(".fadetext").fadeIn(2500)
  $("#quiz").submit(function(event) {


    var q1 = $("input:radio[name=question1]:checked").val();
    if ( q1 === "bigbiz" ) { csharp ++; jav ++; }
      else if (q1 === "startup") { ruby ++; }

    var q2 = $("input:radio[name=question2]:checked").val();
    if ( q2 === "design" ) { design ++; }
      else if (q2 === "mobile") { jav +=2; }
      else if (q2 === "rails") { ruby ++; }

    var q3 = $("input:radio[name=question3]:checked").val();
    if ( q3 === "design" ) { design ++; }
      else if (q3 === "csharp") { csharp ++; }
      else if (q3 === "ruby") { ruby +=2; }

    var q4 = $("input:radio[name=question4]:checked").val();
    if ( q4 === "csharp" ) { csharp ++; }
      else if (q4 === "design") { design ++; }
      else if (q4 === "") { jav ++; }

    var q5 = $("input:radio[name=question5]:checked").val();
    if ( q5 === "design" ) { design ++; }
      else if (q5 === "backend") { csharp ++; jav ++; }

    if ( jav > design &&
          jav > csharp &&
          jav > ruby) {
          result = "Java and Android";
    } else if ( csharp > design &&
          csharp > jav &&
          csharp > ruby) {
          result = "C# and .NET";
    } else if ( ruby > design &&
          ruby > csharp &&
          ruby > jav) {
          result = "Ruby and Ruby on Rails";
    } else { result = "Design and CSS"; }

    $("h7").show();
    $(".track").text(result);


  console.log("user selected: " + q1);
  console.log("c#: " + csharp);
  console.log("java: " + jav);
  console.log("ruby: " + ruby);
  console.log("design: " + design);
  event.preventDefault();
  });
});
