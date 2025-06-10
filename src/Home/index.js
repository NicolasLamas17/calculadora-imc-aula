import { StyleSheet, Text, View } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.caixa}>
        <Text style={styles.titulo}>Calculadora IMC</Text>

        <Text style={styles.subtitulo}>
          Insira seus dados para calcular seu índice de Massa Corporal. Gênero
        </Text>

        <View>
          <View>
            <Text></Text>
          </View>
        </View>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
