import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { PrimaryButton } from './PrimaryButton';

interface FeatureCardProps {
  title: string;
  description: string;
  buttonText: string;
  backgroundImage: string;
  onPress: () => void;
}

export function FeatureCard({ title, description, buttonText, backgroundImage, onPress }: FeatureCardProps) {
  return (
    <View style={styles.container}>
      <ImageBackground source={{ uri: backgroundImage }} style={styles.background} imageStyle={styles.backgroundImage}>
        <View style={styles.overlay}>
          <View style={styles.content}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
            <PrimaryButton
              title={buttonText}
              onPress={onPress}
              style={styles.button}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 20,
  },
  background: {
    minHeight: 300,
  },
  backgroundImage: {
    borderRadius: 16,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'flex-end',
    padding: 24,
  },
  content: {
    maxWidth: '80%',
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: 12,
    lineHeight: 34,
  },
  description: {
    fontSize: 16,
    color: '#F3F4F6',
    marginBottom: 20,
    lineHeight: 24,
  },
  button: {
    alignSelf: 'flex-start',
  },
});