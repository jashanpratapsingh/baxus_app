import { View, Text, StyleSheet, ScrollView, SafeAreaView, Image } from 'react-native';
import { BaxusLogo } from '@/components/BaxusLogo';
import { FeatureCard } from '@/components/FeatureCard';
import { Shield, Users, TrendingUp, Award } from 'lucide-react-native';

export default function AboutScreen() {
  const features = [
    {
      icon: Shield,
      title: 'Secure Storage',
      description: 'Professional vault storage with insurance coverage and optimal conditions for your collection.',
    },
    {
      icon: Users,
      title: 'Peer-to-Peer Trading',
      description: 'Connect directly with other collectors to buy, sell, and trade rare spirits at fair market prices.',
    },
    {
      icon: TrendingUp,
      title: 'Market Intelligence',
      description: 'Access real-time pricing data and market trends to make informed decisions about your collection.',
    },
    {
      icon: Award,
      title: 'Authentication',
      description: 'Every bottle is verified for authenticity and condition by our team of spirits experts.',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <BaxusLogo size="large" />
          <Text style={styles.tagline}>The Secure Marketplace for Rare Spirits</Text>
        </View>

        {/* Hero Section */}
        <FeatureCard
          title="Revolutionizing Spirits Trading"
          description="BAXUS is the first peer-to-peer marketplace designed specifically for whisky and spirits collectors. We provide a secure, transparent platform for buying, selling, and storing your most valuable bottles."
          buttonText="Learn More"
          backgroundImage="https://images.pexels.com/photos/1170076/pexels-photo-1170076.jpeg"
          onPress={() => console.log('Learn more pressed')}
        />

        {/* Mission Statement */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Our Mission</Text>
          <Text style={styles.description}>
            We believe that exceptional spirits deserve exceptional care. Our mission is to create the world's most trusted marketplace for rare spirits, connecting passionate collectors while ensuring the integrity and security of every transaction.
          </Text>
        </View>

        {/* Features */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Why Choose BAXUS?</Text>
          <View style={styles.featuresContainer}>
            {features.map((feature, index) => (
              <View key={index} style={styles.featureCard}>
                <View style={styles.featureIconContainer}>
                  <feature.icon size={28} color="#0F766E" />
                </View>
                <View style={styles.featureContent}>
                  <Text style={styles.featureTitle}>{feature.title}</Text>
                  <Text style={styles.featureDescription}>{feature.description}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Stats Section */}
        <View style={styles.statsSection}>
          <Text style={styles.sectionTitle}>By the Numbers</Text>
          <View style={styles.statsGrid}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>10,000+</Text>
              <Text style={styles.statLabel}>Bottles Traded</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>$50M+</Text>
              <Text style={styles.statLabel}>Total Value</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>5,000+</Text>
              <Text style={styles.statLabel}>Active Members</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>99.9%</Text>
              <Text style={styles.statLabel}>Satisfaction Rate</Text>
            </View>
          </View>
        </View>

        {/* Team Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Founded by Collectors, for Collectors</Text>
          <Text style={styles.description}>
            Our team combines decades of experience in spirits, technology, and finance. We understand the passion that drives collectors because we are collectors ourselves.
          </Text>
          <View style={styles.teamImageContainer}>
            <Image
              source={{ uri: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg' }}
              style={styles.teamImage}
              resizeMode="cover"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    paddingVertical: 30,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  tagline: {
    fontSize: 16,
    color: '#6B7280',
    marginTop: 8,
    textAlign: 'center',
  },
  section: {
    backgroundColor: '#FFFFFF',
    padding: 24,
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: '#6B7280',
    lineHeight: 24,
  },
  featuresContainer: {
    marginTop: 16,
  },
  featureCard: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  featureIconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#E6FFFA',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  featureContent: {
    flex: 1,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 6,
  },
  featureDescription: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
  },
  statsSection: {
    backgroundColor: '#0F766E',
    padding: 24,
    marginTop: 20,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  statItem: {
    width: '48%',
    alignItems: 'center',
    marginBottom: 20,
  },
  statNumber: {
    fontSize: 28,
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    color: '#A7F3D0',
    textAlign: 'center',
  },
  teamImageContainer: {
    marginTop: 20,
    borderRadius: 12,
    overflow: 'hidden',
  },
  teamImage: {
    width: '100%',
    height: 200,
  },
});