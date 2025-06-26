import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { BaxusLogo } from '@/components/BaxusLogo';
import { PrimaryButton } from '@/components/PrimaryButton';
import { FeatureCard } from '@/components/FeatureCard';
import { Camera, Package, DollarSign, Shield, Clock, Users } from 'lucide-react-native';

export default function SellScreen() {
  const steps = [
    {
      icon: Camera,
      title: 'Submit Your Collection',
      description: 'Upload photos and details of the bottles you want to consign or sell.',
    },
    {
      icon: Package,
      title: 'Professional Authentication',
      description: 'Our experts verify authenticity, condition, and market value.',
    },
    {
      icon: DollarSign,
      title: 'Set Your Price',
      description: 'Choose your asking price or let us handle pricing optimization.',
    },
    {
      icon: Users,
      title: 'Connect with Buyers',
      description: 'Your bottles are featured to our network of verified collectors.',
    },
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Secure Transactions',
      description: 'All payments are processed securely with buyer protection.',
    },
    {
      icon: Clock,
      title: 'Fast Turnaround',
      description: 'Most bottles sell within 30 days of listing.',
    },
    {
      icon: DollarSign,
      title: 'Competitive Rates',
      description: 'Industry-leading commission rates for sellers.',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <BaxusLogo size="medium" />
        </View>

        {/* Hero Section */}
        <FeatureCard
          title="Onboard Your Collection"
          description="Whether you're looking to send bottles to the BAXUS vault for safe storage, insurance coverage, pricing data, or to sell them to someone who wants them even more than you do, we want to make the process as easy as possible."
          buttonText="Submit your Collection"
          backgroundImage="https://images.pexels.com/photos/4021779/pexels-photo-4021779.jpeg"
          onPress={() => console.log('Submit collection pressed')}
        />

        {/* How It Works */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>How it works</Text>
          <View style={styles.stepsContainer}>
            {steps.map((step, index) => (
              <View key={index} style={styles.stepCard}>
                <View style={styles.stepHeader}>
                  <View style={styles.stepIconContainer}>
                    <step.icon size={24} color="#0F766E" />
                  </View>
                  <View style={styles.stepNumber}>
                    <Text style={styles.stepNumberText}>{index + 1}</Text>
                  </View>
                </View>
                <View style={styles.stepContent}>
                  <Text style={styles.stepTitle}>{step.title}</Text>
                  <Text style={styles.stepDescription}>{step.description}</Text>
                </View>
                {index < steps.length - 1 && <View style={styles.stepConnector} />}
              </View>
            ))}
          </View>
        </View>

        {/* Benefits */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Why Sell with BAXUS?</Text>
          <View style={styles.benefitsContainer}>
            {benefits.map((benefit, index) => (
              <View key={index} style={styles.benefitCard}>
                <View style={styles.benefitIconContainer}>
                  <benefit.icon size={28} color="#0F766E" />
                </View>
                <View style={styles.benefitContent}>
                  <Text style={styles.benefitTitle}>{benefit.title}</Text>
                  <Text style={styles.benefitDescription}>{benefit.description}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Pricing Section */}
        <View style={styles.pricingSection}>
          <Text style={styles.pricingTitle}>Simple, Transparent Pricing</Text>
          <View style={styles.pricingCard}>
            <Text style={styles.pricingPercentage}>15%</Text>
            <Text style={styles.pricingLabel}>Commission Rate</Text>
            <Text style={styles.pricingDescription}>
              Only pay when your bottle sells. No upfront fees, no hidden costs.
            </Text>
          </View>
        </View>

        {/* CTA Section */}
        <View style={styles.ctaSection}>
          <Text style={styles.ctaTitle}>Ready to Get Started?</Text>
          <Text style={styles.ctaDescription}>
            Join thousands of collectors who trust BAXUS to sell their rare spirits safely and efficiently.
          </Text>
          <PrimaryButton
            title="Start Selling Now"
            onPress={() => console.log('Start selling pressed')}
            style={styles.ctaButton}
          />
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
    paddingVertical: 20,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
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
    marginBottom: 20,
  },
  stepsContainer: {
    position: 'relative',
  },
  stepCard: {
    marginBottom: 32,
    position: 'relative',
  },
  stepHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  stepIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#E6FFFA',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  stepNumber: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#0F766E',
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepNumberText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
  stepContent: {
    marginLeft: 64,
  },
  stepTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 6,
  },
  stepDescription: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
  },
  stepConnector: {
    position: 'absolute',
    left: 23,
    top: 48,
    bottom: -32,
    width: 2,
    backgroundColor: '#E5E7EB',
  },
  benefitsContainer: {
    marginTop: 8,
  },
  benefitCard: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  benefitIconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#E6FFFA',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  benefitContent: {
    flex: 1,
  },
  benefitTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 6,
  },
  benefitDescription: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
  },
  pricingSection: {
    backgroundColor: '#0F766E',
    padding: 24,
    marginTop: 20,
    alignItems: 'center',
  },
  pricingTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 20,
    textAlign: 'center',
  },
  pricingCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 32,
    alignItems: 'center',
    width: '100%',
  },
  pricingPercentage: {
    fontSize: 48,
    fontWeight: '800',
    color: '#0F766E',
    marginBottom: 8,
  },
  pricingLabel: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 12,
  },
  pricingDescription: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 20,
  },
  ctaSection: {
    backgroundColor: '#FFFFFF',
    padding: 24,
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
  ctaTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 12,
    textAlign: 'center',
  },
  ctaDescription: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 24,
  },
  ctaButton: {
    paddingHorizontal: 32,
  },
});