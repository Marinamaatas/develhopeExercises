import java.util.Scanner;

public class NumberToWord {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        while (true) {
            System.out.print("Enter a number between 1 and 10 (or 0 to exit): ");
            int number = scanner.nextInt();

            switch (number) {
                case 1:
                    System.out.println("one");
                    break;
                case 2:
                    System.out.println("two");
                    break;
                case 3:
                    System.out.println("three");
                    break;
                case 4:
                    System.out.println("four");
                    break;
                case 5:
                    System.out.println("five");
                    break;
                case 6:
                    System.out.println("six");
                    break;
                case 7:
                    System.out.println("seven");
                    break;
                case 8:
                    System.out.println("eight");
                    break;
                case 9:
                    System.out.println("nine");
                    break;
                case 10:
                    System.out.println("ten");
                    break;
                case 0:
                    System.out.println("Exiting...");
                    return; // Exit the program
                default:
                    System.out.println("Cannot give you the name");
            }

            if (number < 1 || number > 10) {
                System.out.println("Please enter a number between 1 and 10.");
            }
        }
    }
}


