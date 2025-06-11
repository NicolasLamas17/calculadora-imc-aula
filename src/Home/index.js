import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.caixa}>
        <Text style={styles.titulo}>Calculadora IMC</Text>

        <Text style={styles.subtitulo}>
          Insira seus dados para calcular seu índice de Massa Corporal. Gênero
        </Text>

        <View style={styles.formulario}>
          <View>
            <Text>Altura</Text>
            <TextInput style={styles.campo} />
          </View>

          <View>
            <Text>Peso</Text>
            <TextInput style={styles.campo} />
          </View>

          <TouchableOpacity style={styles.botao}>
            <Text style={styles.texto}>Calcualar IMC</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // ocupar a tela toda
    justifyContent: "center", // alinhar horizontal centro
    alignItems: "center", // alinha vertical centro
    backgroundColor: "#f1f1f1", // pintar o fundo da tela
    padding: 20, // gordurinha (margem interna)
  },

  titulo: {
    fontSize: 23, // tamanho da letra
    fontWeight: "bold", // peso da fonte (negrito)
    textAlign: "center", // centralizar o texto
  },

  caixa: {
    backgroundColor: "#fff", // branco (cor de fundo)
    borderRadius: 4, // arredondar as bordas
    padding: 15, // gordurinha (margem interna)
  },

  subtitulo: {
    textAlign: "center", // centraliza o texto
    color: "greey", // cor do texto
    fontWeight: "semibold", // peso da fonte (semi negrito)
    lineHeight: 20, // altura da linha do texto
  },
});
