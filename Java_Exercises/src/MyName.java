public class MyName {
    public static void main(String[] args) {
        String myName = "Marini Matas";
        String subcadena = "ni";

        if (myName.contains(subcadena)){
            System.out.println(("La subcadena '" + subcadena + "' está presente en " + myName));
        }
        else {
            System.out.println(("La subcadena '" + subcadena + "' no está presente en " + myName));
        }
    }
}
