function initialFunction() {

    function incrementCounter ()
{let counter = 0;

    try {
        initialFunction ();

        counter ++;
if (counter <7) {
throw new Error ("Counter is less than 5");
}
    } catch (error) {
        console.error ("An error occurred:", error);
        console.log("Counter:", counter);
    }
   
}}

function getCounterValue () {
    return counter;
}
