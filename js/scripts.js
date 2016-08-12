//Math Logic
var csharp = 0;
var jav = 0;
var ruby = 0;
var design = 0;

$( document ).ready(function() {
  $("#quiz").submit(function(event) {

    var q1 = $("input:radio[name=question1]:checked").val();
    if ( q1 === "bigbiz" ) { csharp ++; jav ++; }
      else if (q1 === "startup") { ruby ++; }
      else if (q1 === "none") { }

    var q2 = $("input:radio[name=question2]:checked").val();
    if ( q2 === "design" ) { design ++; }
      else if (q2 === "mobile") { jav ++; }
      else if (q2 === "rails") { ruby ++; }

    var q3 = $("input:radio[name=question3]:checked").val();
    if ( q3 === "design" ) { design ++; }
      else if (q3 === "csharp") { csharp ++; }
      else if (q3 === "ruby") { ruby ++; }

    // var q4 = $("input:radio[name=question4]:checked").val();
    // if ( q4 === "" ) {  ++; }
    //   else if (q4 === "") {  ++; }
    //   else if (q4 === "") {  ++; }
    //
    // var q5 = $("input:radio[name=question5]:checked").val();
    // if ( q5 === "" ) {  ++; }
    //   else if (q5 === "") {  ++; }
    //   else if (q5 === "") {  ++; }

  console.log("user selected: " + q1);
  console.log("c#: " + csharp);
  console.log("java: " + jav);
  console.log("ruby: " + ruby);
  console.log("design: " + design);
  event.preventDefault();
  });
});
