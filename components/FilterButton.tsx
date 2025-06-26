import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface FilterButtonProps {
  title: string;
  isActive?: boolean;
  onPress: () => void;
}

export function FilterButton({ title, isActive = false, onPress }: FilterButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.button, isActive && styles.activeButton]}
      onPress={onPress}
    >
      <Text style={[styles.text, isActive && styles.activeText]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    backgroundColor: '#FFFFFF',
    marginRight: 12,
  },
  activeButton: {
    backgroundColor: '#0F766E',
    borderColor: '#0F766E',
  },
  text: {
    fontSize: 14,
    fontWeight: '500',
    color: '#374151',
  },
  activeText: {
    color: '#FFFFFF',
  },
});