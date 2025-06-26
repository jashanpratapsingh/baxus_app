import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { BaxusLogo } from '@/components/BaxusLogo';
import { PrimaryButton } from '@/components/PrimaryButton';
import { User, Package, Heart, Settings, CreditCard, Shield } from 'lucide-react-native';

export default function AccountScreen() {
  const menuItems = [
    { icon: User, title: 'Profile', subtitle: 'Manage your personal information' },
    { icon: Package, title: 'My Collection', subtitle: 'View and manage your bottles' },
    { icon: Heart, title: 'Wishlist', subtitle: 'Bottles you want to acquire' },
    { icon: CreditCard, title: 'Payment Methods', subtitle: 'Manage your payment options' },
    { icon: Shield, title: 'Security', subtitle: 'Password and authentication' },
    { icon: Settings, title: 'Settings', subtitle: 'App preferences and notifications' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <BaxusLogo size="medium" />
        </View>

        {/* User Profile Section */}
        <View style={styles.profileSection}>
          <View style={styles.avatar}>
            <User size={40} color="#0F766E" />
          </View>
          <Text style={styles.userName}>Welcome back!</Text>
          <Text style={styles.userEmail}>Sign in to access your account</Text>
          <PrimaryButton
            title="Sign In"
            onPress={() => console.log('Sign in pressed')}
            style={styles.signInButton}
          />
        </View>

        {/* Collection Stats */}
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>0</Text>
            <Text style={styles.statLabel}>Bottles</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>$0</Text>
            <Text style={styles.statLabel}>Portfolio Value</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>0</Text>
            <Text style={styles.statLabel}>Transactions</Text>
          </View>
        </View>

        {/* Menu Items */}
        <View style={styles.menuContainer}>
          {menuItems.map((item, index) => (
            <TouchableOpacity key={index} style={styles.menuItem}>
              <View style={styles.menuIconContainer}>
                <item.icon size={24} color="#0F766E" />
              </View>
              <View style={styles.menuContent}>
                <Text style={styles.menuTitle}>{item.title}</Text>
                <Text style={styles.menuSubtitle}>{item.subtitle}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Quick Actions */}
        <View style={styles.quickActions}>
          <PrimaryButton
            title="Add Bottles to Collection"
            onPress={() => console.log('Add bottles pressed')}
            style={styles.actionButton}
          />
          <TouchableOpacity style={styles.secondaryButton}>
            <Text style={styles.secondaryButtonText}>Browse Marketplace</Text>
          </TouchableOpacity>
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
  profileSection: {
    backgroundColor: '#FFFFFF',
    padding: 24,
    alignItems: 'center',
    marginTop: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#E6FFFA',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  userName: {
    fontSize: 24,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 16,
    color: '#6B7280',
    marginBottom: 20,
  },
  signInButton: {
    paddingHorizontal: 32,
  },
  statsContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    marginTop: 20,
    paddingVertical: 20,
  },
  statCard: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 12,
    borderRightWidth: 1,
    borderRightColor: '#E5E7EB',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: '700',
    color: '#0F766E',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
  },
  menuContainer: {
    backgroundColor: '#FFFFFF',
    marginTop: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  menuIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#E6FFFA',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  menuContent: {
    flex: 1,
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 2,
  },
  menuSubtitle: {
    fontSize: 14,
    color: '#6B7280',
  },
  quickActions: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    marginTop: 20,
    marginBottom: 20,
  },
  actionButton: {
    marginBottom: 12,
  },
  secondaryButton: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#0F766E',
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: '#0F766E',
    fontSize: 16,
    fontWeight: '600',
  },
});