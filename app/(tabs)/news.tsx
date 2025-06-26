import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { useState } from 'react';
import { BaxusLogo } from '@/components/BaxusLogo';
import { SearchBar } from '@/components/SearchBar';
import { FilterButton } from '@/components/FilterButton';

export default function NewsScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All Articles');

  const categories = ['All Articles', 'Spirits 101', 'Spirits History', 'Spirits Culture'];
  
  const newsTypes = [
    { title: 'Featured Articles', isActive: true },
    { title: 'BAXUS in the News', isActive: false },
  ];

  const articles = [
    {
      id: '1',
      title: 'The Art of Whisky Collecting: A Beginner\'s Guide',
      excerpt: 'Learn the fundamentals of building a whisky collection that will appreciate in value over time.',
      category: 'Spirits 101',
      imageUrl: 'https://images.pexels.com/photos/4021779/pexels-photo-4021779.jpeg',
      readTime: '5 min read',
      date: 'Dec 15, 2024',
    },
    {
      id: '2',
      title: 'Inside BAXUS: Meet the Team Behind the Platform',
      excerpt: 'Get to know the passionate collectors and tech experts who built the secure marketplace for rare spirits.',
      category: 'BAXUS News',
      imageUrl: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      readTime: '8 min read',
      date: 'Dec 12, 2024',
    },
    {
      id: '3',
      title: 'The History of Bourbon: From Colonial Times to Today',
      excerpt: 'Explore the rich heritage of America\'s native spirit and how it became a global phenomenon.',
      category: 'Spirits History',
      imageUrl: 'https://images.pexels.com/photos/5947020/pexels-photo-5947020.jpeg',
      readTime: '12 min read',
      date: 'Dec 10, 2024',
    },
    {
      id: '4',
      title: 'Japanese Whisky: The Rising Star of the Spirits World',
      excerpt: 'Discover why Japanese whisky has become one of the most sought-after categories for collectors.',
      category: 'Spirits Culture',
      imageUrl: 'https://images.pexels.com/photos/6190315/pexels-photo-6190315.jpeg',
      readTime: '7 min read',
      date: 'Dec 8, 2024',
    },
  ];

  const filteredArticles = activeCategory === 'All Articles' 
    ? articles 
    : articles.filter(article => article.category.includes(activeCategory === 'BAXUS in the News' ? 'BAXUS' : activeCategory));

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <BaxusLogo size="medium" />
        </View>

        {/* News Type Selector */}
        <View style={styles.newsTypeContainer}>
          {newsTypes.map((type, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.newsTypeButton, type.isActive && styles.activeNewsType]}
            >
              <Text style={[styles.newsTypeText, type.isActive && styles.activeNewsTypeText]}>
                {type.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Category Tabs */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categoryContainer}
          contentContainerStyle={styles.categoryContent}
        >
          {categories.map((category) => (
            <TouchableOpacity
              key={category}
              style={[styles.categoryTab, activeCategory === category && styles.activeCategoryTab]}
              onPress={() => setActiveCategory(category)}
            >
              <Text style={[styles.categoryText, activeCategory === category && styles.activeCategoryText]}>
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <SearchBar
            placeholder="Search..."
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        {/* Featured Article */}
        {filteredArticles.length > 0 && (
          <TouchableOpacity style={styles.featuredArticle}>
            <Image source={{ uri: filteredArticles[0].imageUrl }} style={styles.featuredImage} />
            <View style={styles.featuredContent}>
              <View style={styles.articleMeta}>
                <Text style={styles.categoryBadge}>{filteredArticles[0].category}</Text>
                <Text style={styles.readTime}>{filteredArticles[0].readTime}</Text>
              </View>
              <Text style={styles.featuredTitle}>{filteredArticles[0].title}</Text>
              <Text style={styles.featuredExcerpt}>{filteredArticles[0].excerpt}</Text>
              <Text style={styles.articleDate}>{filteredArticles[0].date}</Text>
            </View>
          </TouchableOpacity>
        )}

        {/* Articles List */}
        <View style={styles.articlesContainer}>
          {filteredArticles.slice(1).map((article) => (
            <TouchableOpacity key={article.id} style={styles.articleCard}>
              <Image source={{ uri: article.imageUrl }} style={styles.articleImage} />
              <View style={styles.articleContent}>
                <View style={styles.articleMeta}>
                  <Text style={styles.categoryBadge}>{article.category}</Text>
                  <Text style={styles.readTime}>{article.readTime}</Text>
                </View>
                <Text style={styles.articleTitle}>{article.title}</Text>
                <Text style={styles.articleExcerpt}>{article.excerpt}</Text>
                <Text style={styles.articleDate}>{article.date}</Text>
              </View>
            </TouchableOpacity>
          ))}
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
  newsTypeContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    paddingVertical: 20,
  },
  newsTypeButton: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 25,
    backgroundColor: '#F3F4F6',
    marginRight: 12,
  },
  activeNewsType: {
    backgroundColor: '#0F766E',
  },
  newsTypeText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6B7280',
  },
  activeNewsTypeText: {
    color: '#FFFFFF',
  },
  categoryContainer: {
    backgroundColor: '#FFFFFF',
    paddingBottom: 20,
  },
  categoryContent: {
    paddingHorizontal: 24,
  },
  categoryTab: {
    marginRight: 24,
    paddingBottom: 12,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  activeCategoryTab: {
    borderBottomColor: '#D97706',
  },
  categoryText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#9CA3AF',
  },
  activeCategoryText: {
    color: '#111827',
    fontWeight: '600',
  },
  searchContainer: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    paddingBottom: 20,
  },
  featuredArticle: {
    backgroundColor: '#FFFFFF',
    marginTop: 20,
    borderRadius: 16,
    overflow: 'hidden',
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  featuredImage: {
    width: '100%',
    height: 200,
  },
  featuredContent: {
    padding: 20,
  },
  articleMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  categoryBadge: {
    fontSize: 12,
    fontWeight: '600',
    color: '#0F766E',
    backgroundColor: '#E6FFFA',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  readTime: {
    fontSize: 12,
    color: '#6B7280',
  },
  featuredTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 8,
    lineHeight: 28,
  },
  featuredExcerpt: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
    marginBottom: 12,
  },
  articleDate: {
    fontSize: 12,
    color: '#9CA3AF',
  },
  articlesContainer: {
    padding: 20,
  },
  articleCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
    flexDirection: 'row',
  },
  articleImage: {
    width: 100,
    height: 100,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  },
  articleContent: {
    flex: 1,
    padding: 16,
  },
  articleTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 6,
    lineHeight: 22,
  },
  articleExcerpt: {
    fontSize: 13,
    color: '#6B7280',
    lineHeight: 18,
    marginBottom: 8,
  },
});