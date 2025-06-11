import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Home() {
  // criando useStates (estados)
  const [mensagem, setMensagem] = useState(''); // string
  // criar para: 

  /* 
    categoria => ""
    imc => ""
    peso => ""
    altura => ""
  */

  function calcularImc(peso, altura) {
    // converter de metros para cm
    let converter = altura / 100;
    // formula do imc
    let imc = peso / (converter * converter);
  }

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
            <Text style={styles.texto}>Calcular IMC</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.resposta}>
          <Text style={styles.tituloImc}>Seu IMC é: </Text>
          <Text style={styles.calculo}>25.5</Text>
          <Text style={styles.categoria}>Obesidade</Text>
        </View>

        <Text style={styles.mensagem}>Voce está comendo demais</Text>
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

  formulario: {
    gap: 10, // vão (espaço entre os itens)
  },

  campo: {
    height: 50, // altura do campo
    borderWidth: 1, // cria uma borda
    borderColor: "#ccc", // cor da borda
    paddingHorizontal: 10, // gordurinha (margem interna)
    borderRadius: 4, // arredondar as bordas
    width: "100%", // largura
  },

  botao: {
    backgroundColor: "#2563EB", // cor de fundo
    paddingVertical: 16, // gordurinha vertical
    paddingHorizontal: 32, // gorgunha horizontal
    borderRadius: 10, // arredondar as bordas
    alignItems: "center", // centralizar o texto
    justifyContent: "center", // centralizar o conteudo
    width: "100%", // largura
  },

  texto: {
    color: "#fff", // cor da letra
    fontWeight: "bold", // peso da fonte (negrito)
    fontSize: 16, // tamanho da letra
  },

  calculo: {
    fontSize: 32, // tamanho da letra
    fontWeight: "bold", // peso da fonte (negrito)
    color: "#fff", // cor da letra
  },

  categoria: {
    backgroundColor: "#e54", // cor de fundo
    paddingHorizontal: 20, // gordurinha horizontal
    paddingVertical: 5, // gordurinha vertical
    borderRadius: 50, // arredondar as bordas
    color: "#fff", // cor da letra
    fontWeight: "bold", // peso da fonte (negrito)
    fontSize: 20, // tamanho da letra
  },

  tituloImc: {
    fontSize: 32, // tamanho da letra
    color: "#fff", // cor da letra
    fontWeight: "bold", // peso da fonte (negrito)
  },

  mensagem: {
    color: "#444", // cor da letra
    lineHeight: 24, // altura da linha
    marginTop: 12, // espaço em cima
    textAlign: "center", // texto no centro
    fontSize: 18, // tamanho da letra
  },

  resposta: {
    justifyContent: "center", // centralizar o conteudo centro
    alignItems: "center", // alinha o conteudo no centro
    gap: 2, // criar um epspaço
    marginTop: 20, // espaço em cima
    padding: 40, // gordurinha completa
    borderRadius: 12, // arredondar as bordas
  },
});
