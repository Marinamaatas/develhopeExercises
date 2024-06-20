public class StringPractice2 {
    public static void main(String[] args) {
        /*Define a string called string1 that has assigned the value "Hello"
Define a string called string2 that has assigned the value "How are you?"
Take the first 2 characters string1 and the last 2 characters of string2 and
 combine the 4 chars (Heu?) into a dedicated array called charArray
Print charArray*/
        String string1 = "Hello";
        String string2 = "How are you?";

        String substring1 = string1.substring(0, 2);
        String substring2 = string2.substring(string2.length() - 2);

        StringBuilder combinedString = new StringBuilder();
        combinedString.append(substring1);
        combinedString.append(substring2);

        char[] charArray = combinedString.toString().toCharArray();

        System.out.println(charArray);
    }
}
