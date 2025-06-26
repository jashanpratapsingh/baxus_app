import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { useState } from 'react';
import { BaxusLogo } from '@/components/BaxusLogo';
import { SearchBar } from '@/components/SearchBar';
import { FilterButton } from '@/components/FilterButton';
import { ProductCard } from '@/components/ProductCard';
import { FeatureCard } from '@/components/FeatureCard';

export default function MarketplaceScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('Featured');

  const featuredProducts = [
    {
      id: '1',
      title: 'Bardstown Collaborative Chateau De Laubade Finish',
      subtitle: 'Bourbon | 750 ml | 107 Proof',
      price: '$238.00',
      imageUrl: 'https://images.pexels.com/photos/4021779/pexels-photo-4021779.jpeg'
    },
    {
      id: '2',
      title: 'Blanton\'s Single Barrel Bourbon',
      subtitle: 'Bourbon | 750 ml | 93 Proof',
      price: '$425.00',
      imageUrl: 'https://images.pexels.com/photos/5947020/pexels-photo-5947020.jpeg'
    },
    {
      id: '3',
      title: 'Macallan 18 Year Sherry Oak',
      subtitle: 'Scotch Whisky | 700 ml | 86 Proof',
      price: '$850.00',
      imageUrl: 'https://images.pexels.com/photos/6190315/pexels-photo-6190315.jpeg'
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <BaxusLogo size="large" />
        </View>

        {/* Hero Section */}
        <FeatureCard
          title="Onboard Your Collection"
          description="Whether you're looking to send bottles to the BAXUS vault for safe storage, insurance coverage, pricing data, or to sell them to someone who wants them even more than you do, we want to make the process as easy as possible."
          buttonText="Submit your Collection"
          backgroundImage="https://images.pexels.com/photos/4021779/pexels-photo-4021779.jpeg"
          onPress={() => console.log('Submit collection pressed')}
        />

        {/* Blanton's Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Find Your Date with Blanton's</Text>
          <Text style={styles.sectionDescription}>
            Hunting a special dump date? Discover Blanton's bottles by exact date, listed by other collections — only on our marketplace built for whiskey lovers like you.
          </Text>
          <FilterButton
            title="Search Now"
            isActive={true}
            onPress={() => console.log('Search Blanton\'s pressed')}
          />
        </View>

        {/* Marketplace Section */}
        <View style={styles.section}>
          <Text style={styles.marketplaceTitle}>Explore the marketplace</Text>
          
          <SearchBar
            placeholder="Search by name"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />

          <View style={styles.filterContainer}>
            <FilterButton
              title="Filters"
              isActive={false}
              onPress={() => console.log('Filters pressed')}
            />
            <FilterButton
              title="Featured"
              isActive={activeFilter === 'Featured'}
              onPress={() => setActiveFilter('Featured')}
            />
          </View>

          {/* Products Grid */}
          <View style={styles.productsContainer}>
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                title={product.title}
                subtitle={product.subtitle}
                price={product.price}
                imageUrl={product.imageUrl}
                onPress={() => console.log(`Product ${product.id} pressed`)}
              />
            ))}
          </View>
        </View>

        {/* Bottom Feature */}
        <FeatureCard
          title="The Secure Marketplace to Trade Rare Spirits"
          description="BAXUS is the first peer-to-peer Marketplace for buying, selling, trading, and storing your valuable spirits & wine, at the price you want to set."
          buttonText="Go to the Marketplace"
          backgroundImage="https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg"
          onPress={() => console.log('Go to marketplace pressed')}
        />
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
    padding: 20,
    backgroundColor: '#FFFFFF',
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 12,
  },
  sectionDescription: {
    fontSize: 16,
    color: '#6B7280',
    lineHeight: 24,
    marginBottom: 20,
  },
  marketplaceTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#111827',
    marginBottom: 20,
  },
  filterContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  productsContainer: {
    flex: 1,
  },
});