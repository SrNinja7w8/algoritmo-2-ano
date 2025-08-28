import java.util.Stack;
import javax.swing.JOptionPane;
public class atv {
    public static void main(String[] args) {
        Stack<Character> P1 = new Stack<>();
        Stack<Character> P2 = new Stack<>();

        String poli = JOptionPane.showInputDialog("Digite a palavra: ");
        poli = poli.toLowerCase();
        char[] pol = poli.toCharArray();
          for(char c : pol) {
            P1.push(c);
        }
          for(char c : pol) {
            P1.push(c);
        }
        
        for(int i=0; i<P1.size(); i++) {
            P2.push(P1.pop());
        }




        if(P1.equals(P2)) {
            JOptionPane.showMessageDialog(null, "A palavra é um palíndromo!");
        } else {
            JOptionPane.showMessageDialog(null, "A palavra não é um palíndromo!");
        }

        JOptionPane.showMessageDialog(null, "Pilha: " + P1 + "\n" + "Pilha Invertida: " + P2);
    }
}
