import { StyleSheet, Text, View } from "react-native";

export default function Home() {
  return (
   <ImageBackground style={styles.capaDeFundo} resizeMode="cover" source={capa}> 
     <View style={styles.container}>
      <View style={styles.caixa}>
       
        <Text style={styles.titulo}> Calculadora IMC</Text>


        <Text style={styles.subtitulo}>
          Insira seus dados para calcular seu índice de Massa Corporal. Gênero
        </Text>

        <View>
          <View>
            <Text></Text>
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
  container: {},
});
