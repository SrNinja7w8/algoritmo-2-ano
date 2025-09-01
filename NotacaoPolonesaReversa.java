import java.util.Stack;
import javax.swing.JOptionPane;
public class atvv {
    public static void main(String[] args) {
        Stack<Character> ntcs = new Stack<>();
        String ntc = JOptionPane.showInputDialog("Digite a notação polonesa reversa: ");
        for (int i = 0; i < ntc.length(); i++) {
            char c = ntc.charAt(i);
            if (Character.isDigit(c)) {
                ntcs.push(c);
            } else {
                int b = Character.getNumericValue(ntcs.pop());
                int a = Character.getNumericValue(ntcs.pop());
                int resultado = 0;
                switch (c) {
                    case '+':
                        resultado = a + b;
                        break;
                    case '-':
                        resultado = a - b;
                        break;
                    case '*':
                        resultado = a * b;
                        break;
                    case '/':
                        resultado = a / b;
                        break;
                }
                ntcs.push((char) (resultado + '0'));
            }
        }
    }
}
