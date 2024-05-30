public class NumberOperator {
    public static void main(String[] args) {
        int a = 15;
        a += 5;
        a -= 4;
        int b = a;
        b += 1;
        System.out.println(b);
        System.out.println(b % 2);
        int checked = b * (b + 1);
       /* Assign the value of a to int b and increment b by one without using a or int b = b + 1
     check if b is an odd number statement 2: check if the result of (b multiplied for b + 1) is a multiple of 3*/
        System.out.println(checked % 3);
    }
}
