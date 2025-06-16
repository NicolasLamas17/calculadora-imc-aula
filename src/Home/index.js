import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ImageBackground, TextInput } from "react-native-web";
// CHAMANDO A IMAGEM
import capa from "../../assets/capa.jpg"

export default function Home() {
  // CRIANDO useStates (ESTADOS)
  const [mensagem, setMensagem] = useState(""); // STRING
  const [peso, setPeso] = useState(""); // STRING
  const [altura, setAltura] = useState(""); // STRING
  const [CorDeFundoCategoria, setCorDeFundoCategoria] = useState("");
  const [CorDeFundoResposta, setCorDeFundoResposta] = useState("");
  const [resposta, setResposta] = useState("");
  const [categoria, setCategoria] = useState("");
  const [imc, setImc] = useState(0); // Numero

  function calcularImc(peso, Altura) {

    //VALIDAR SE O USUARIO ESCREVEU ALGUMA COISA
    if (!peso || !altura || isNaN(peso) || isNaN(Altura)) {
   alert("Insira todos os dados corretamente");
   return;
    };

    // CONVERTE DE METROS PARA CM
    let converter = altura / 100;
    // FORMULA DO IMC
    let formulaImc = peso / (converter * converter);

  
    // INVERTER DE FALSE PARA TRUE
    setResposta(true);

    if (formulaImc < 18.5) {
      setCategoria("Abaixo do peso");
      setCorDeFundoResposta("#3B82F6");
      setCorDeFundoCategoria("#93C5FD");
      setMensagem(
        "Você está abaixo do peso ideal. Considere procurar um nutricionistra para orientação."
      );
    } else if (formulaImc >= 18.5 && formulaImc <= 24.9) {
      setCategoria("Peso normal");
      setCorDeFundoResposta("#3B82F6");
      setCorDeFundoCategoria("#93C5FD");
      setMensagem(
        "Parabéns! Você está com o peso na faixa ideal. Continue com seus hábitos saudáveis."
      );
    } else if (formulaImc >= 25.0 && formulaImc <= 29.9) {
      setCategoria("Excesso de peso");
      setCorDeFundoResposta("#EAB308");
      setCorDeFundoCategoria("#FDE68A");
      setMensagem(
        "Você está acima do peso ideal. Uma reeducação alimentar e atividades físicas podem ajudar."
      );
    } else if (formulaImc >= 30.0 && formulaImc <= 34.9) {
      setCategoria("Obesidade classe 1");
      setCorDeFundoResposta("#F97316");
      setCorDeFundoCategoria("#FDBA74");
      setMensagem( 
        "Nível de obesidade inicial. É importante procurar orientação médica e nutricional."
      );
    } else if (formulaImc >= 35.0 && formulaImc <= 39.9) {
      setCategoria("Obesidade classe 2");
      setCorDeFundoResposta("#EF4444");
      setCorDeFundoCategoria("#FCA5A5");
      setMensagem(
        "Obesidade moderada. Procure acompanhamento médico para cuidar da saúde"
      );
    } else {
      setCategoria("Obesidade classe 3");
      setCorDeFundoResposta("#B91C1C");
      setCorDeFundoCategoria("#F87171");
      setMensagem(
        "Obesidade grave. É essencial prucurar acompanhamento médico com urgência."
      );
    }
  }

  return (
   <ImageBackground style={styles.capaDeFundo} resizeMode="cover" source={capa}> 
     <View style={styles.container}>
      <View style={styles.caixa}>
       
        <Text style={styles.titulo}> Calculadora IMC</Text>


        <Text style={styles.subtitulo}>
          Insira seus dados para calcular seu índice de Massa Corporal. Gênero
        </Text>

        <View style={styles.formulario}>
          <View>
            <Text>Altura</Text>
            <TextInput
              value={altura}
              onChangeText={setAltura}
              style={styles.campo}
            />
          </View>
        </View>

        <View>
          <Text>Peso</Text>
          <TextInput value={peso} onChangeText={setPeso} style={styles.campo} />
        </View>

        <TouchableOpacity
          onPress={() => calcularImc(Number(peso), Number(altura))}
          style={styles.botao}
        >
          <Text style={styles.texto}>Calcular Imc</Text>
        </TouchableOpacity>
      </View>

      {resposta && (
        <>
          <View
            style={[styles.resposta, { backgroundColor: CorDeFundoResposta }]}
          >
            <Text style={styles.tituloImc}> Seu IMC é: </Text>
            <Text style={styles.calculo}>{imc}</Text>
            <Text
              style={[
                styles.categoria,
                { backgroundColor: CorDeFundoCategoria },
              ]}
            >
              {categoria}
            </Text>
          </View>

          <Text style={styles.mensagem}>{mensagem}</Text>
        </>
      )}
    </View>
   </ImageBackground>
  );
}

const styles = StyleSheet.create({

  capaDeFundo: {
    flex:1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },

  container: {
    flex: 1, // OCUPAR A TELA TODA
    justifyContent: "center", // ALINHAR HORIZONTAL CE NTRO
    alignItems: "center", // ALINHA VERTICAL CENTRO
    padding: 20, // GORDURINHA (MARGEM INTERNA)
  },

  titulo: {
    fontSize: 20, // TAMANHO DA FONTE
    fontWeight: "bold", // PESO DA FONTE (NEGRITO)
    textAlign: "center", // CENTRALIZAR O TEXTO
  },

  caixa: {
    backgroundColor: "#dfcddf", // BRANCO (COR DE FUNDO
    borderRadius: 4, // ARREDONDAR AS BORDAS
    padding: 15, // GORDURINHA (MARGEM INTERNA)
  },

  subtitulo: {
    textAlign: "center", // CENTRALIZAR O TEXTO
    color: "greey", // COR DO TEXTO
    fontWeight: "semibold", // PESO DA FONTE (SEMI NEGRITO)
    lineHeight: 20, // ALTURA DA LINHADO TEXTO
  },

  formulario: {
    gap: 10, // VÃO (ESPAÇO ENTRE OS ITENS)
  },

  campo: {
    height: 50, // ALTURA DO CAMPO
    borderWidth: 1, // CRIA UMA BORDA
    borderColor: "#ccc", // COR DA BORDA
    paddingHorizontal: 10, // GORDURINHA (MARGEM INTERNA)
    borderRadius: 4, // ARREDONDAR AS BORDAS
    width: "100%", // LARGURA
    backgroundColor: "#efddef"
  },

  botao: {
    backgroundColor: "#9967f6", // COR DE FUNDO
    paddingVertical: 16, // GORDURINHA VERTICAL
    paddingHorizontal: 32, // GORDURINHA HORIZONTAL
    borderRadius: 10, // ARRENDONDAR AS BORDAS
    alignItems: "center", // CENTRALIZAR O TEXTO
    justifyContent: "center", // CENTRALIZAR O CONTEUDO
    width: "100%", // LARGURA
  },

  texto: {
    color: "#fff", // COR DA LETRA
    fontWeight: "bold", // PESO DA FONTE (NEGRITO)
    fontSize: 16, // TAMANHO DA LETRA
  },
  calculo: {
    fontSize: 32, // TAMANHO DA LETRA
    fontWeight: "bold", // PESO DA FONTE (NEGRITO)
    color: "#fff", // COR DA LETRA
  },

  tituloImc: {
    color: "#fff",
    fontSize: 24,
  },
  categoria: {
    backgroundColor: "#e54", // COR DE FUNDO
    paddingHorizontal: 20, // GORDURA HORIZONTAL
    paddingVertical: 5, // GORDURA VERTICAL
    borderRadius: 50, // ARRENDONDAR AS BORDAS
    color: "#fff", // COR DA LETRA
    fontWeight: "bold", // PESO DA FONTE (NEGRITO)
    fontSize: 20, // TAMANHO DA LETRA
  },

  mensagem: {
    color: "#444", // COR DA LETRA
    lineHeight: 24, // ALTURA DA LINHA
    marginTop: 12, // ESPAÇO EM CIMA
    textAlign: "center", // TEXTO NO CENTRO
    fontSize: 18, // TAMANHO DA LETRA
  },

  resposta: {
    justifyContent: "center", // CENTRALIZAR O CONTEUDO CENTRO
    alignItems: "center", // ALINHA O CONTEUDO NO CENTRO
    gap: 2, // CRIAR UM ESPAÇO
    marginTop: 20, //ESPAÇO EM CIMA
    padding: 40, // GORDURINHA COMPLETA
    borderRadius: 12, // ARRENDONDAR AS BORDAS
  },
});
