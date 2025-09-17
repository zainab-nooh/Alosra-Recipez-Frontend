# Alosra Recipez - Mobile App

![Alosra Recipez Mobile](https://via.placeholder.com/400x200/4CAF50/FFFFFF?text=Alosra+Recipez+Mobile)

## Overview

**Alosra Recipez Mobile App** is a React Native application that connects food enthusiasts in Bahrain with pre-measured recipe ingredients delivered directly to their doorstep. Built in partnership with Alosra Supermarket, this mobile-first solution makes home cooking accessible and enjoyable by eliminating the guesswork of ingredient shopping and measurements.

### What It Does
- **Recipe Discovery**: Browse curated recipes across multiple cuisines (Arabic, Asian, Italian, Healthy)
- **Smart Shopping**: Add recipes to cart with automatic ingredient calculation based on serving size
- **Dynamic Pricing**: Real-time price updates based on number of people you're cooking for
- **Order Management**: Place orders and track delivery status from preparation to doorstep
- **User Profiles**: Manage delivery addresses and view order history

### Why We Built It
Traditional grocery shopping for specific recipes involves uncertainty about ingredient quantities, freshness, and authenticity. Alosra Recipez transforms this experience by partnering with trusted local supermarkets to deliver chef-curated, pre-measured ingredients alongside video cooking tutorials, making every home cook feel like a professional chef.

### Target Audience
- Busy professionals who want to cook at home but lack time for grocery shopping
- Cooking enthusiasts wanting to explore authentic regional cuisines
- Families looking for convenient meal planning solutions
- Anyone interested in learning new recipes with guided instruction

## 🚀 Getting Started

### Live Application
- **Production App**: [Expo Published App](https://expo.dev/@yourusername/alosra-recipez) *(will be updated after deployment)*
- **Web Demo**: [Web Version](https://alosra-recipez-mobile.netlify.app) *(Expo web build)*

### Planning Materials
- **Trello Board**: [Project Planning & Development Tracking](https://trello.com/b/your-board-id/alosra-recipez-development)
- **Wireframes & User Stories**: Available in Trello board under "Wireframes" section
- **Backend API**: [Alosra-Recipez-Backend](https://github.com/yourusername/Alosra-Recipez-Backend)

## 📱 Technologies Used

### Core Framework
- **React Native** - Cross-platform mobile development framework
- **Expo** - Development toolchain and platform for React Native
- **JavaScript/ES6+** - Programming language
- **Node.js & npm** - Runtime environment and package management

### Navigation & State Management
- **React Navigation v6** - Navigation library for React Native
- **React Context API** - Global state management for authentication and cart
- **React Hooks** - useState, useEffect, useContext for component logic
- **AsyncStorage** - Persistent local storage for mobile apps

### UI & User Experience
- **React Native Elements** - Cross-platform UI components
- **Expo Vector Icons** - Comprehensive icon library
- **React Native Gesture Handler** - Touch gesture management
- **React Native Safe Area Context** - Safe area handling for different devices

### API & Data Management
- **Axios** - HTTP client for API communication
- **JWT Token Management** - Secure authentication with automatic token refresh
- **Real-time Data Sync** - Live cart and order status updates

### Development & Testing
- **Expo Development Build** - Enhanced development experience
- **React Native Debugger** - Development debugging tools
- **Jest** - Testing framework for React Native components

## 📁 Project Structure

```
alosra-recipez-frontend/
├── components/
│   ├── common/
│   │   ├── Button.js           # Reusable button component
│   │   ├── Input.js            # Custom input fields
│   │   ├── Loading.js          # Loading spinner component
│   │   └── Card.js             # Card container component
│   ├── auth/
│   │   ├── LoginForm.js        # Login form component
│   │   └── RegisterForm.js     # Registration form
│   ├── recipe/
│   │   ├── RecipeCard.js       # Recipe display card
│   │   ├── RecipeList.js       # Recipe grid/list view
│   │   ├── CategoryTabs.js     # Horizontal category tabs
│   │   └── ServingSelector.js  # +/- serving size control
│   └── cart/
│       ├── CartItem.js         # Individual cart item
│       └── CartSummary.js      # Cart total and checkout
├── screens/
│   ├── auth/
│   │   ├── LoginScreen.js      # User login screen
│   │   └── RegisterScreen.js   # User registration
│   └── main/
│       ├── HomeScreen.js       # Main dashboard with categories
│       ├── CategoryScreen.js   # Recipe list by category
│       ├── RecipeDetailScreen.js # Recipe details and ordering
│       ├── CartScreen.js       # Shopping cart management
│       ├── OrderHistoryScreen.js # User's order history
│       └── ProfileScreen.js    # User profile management
├── services/
│   ├── api.js                  # Axios configuration and interceptors
│   ├── authService.js          # Authentication API calls
│   ├── recipeService.js        # Recipe and category API calls
│   ├── cartService.js          # Cart management API calls
│   └── orderService.js         # Order processing API calls
├── context/
│   ├── AuthContext.js          # Global authentication state
│   └── CartContext.js          # Global shopping cart state
├── navigation/
│   ├── AppNavigator.js         # Main navigation controller
│   ├── AuthNavigator.js        # Authentication flow navigation
│   └── MainNavigator.js        # Post-login main app navigation
├── utils/
│   ├── storage.js              # AsyncStorage helper functions
│   ├── helpers.js              # Utility functions
│   └── constants.js            # App constants and configurations
├── styles/
│   ├── colors.js               # App color palette
│   ├── dimensions.js           # Screen dimensions and spacing
│   └── globalStyles.js         # Shared styling components
├── assets/
│   ├── images/                 # App images and logos
│   └── icons/                  # Custom app icons
├── App.js                      # Main app component and providers
├── app.json                    # Expo configuration
├── package.json                # Dependencies and scripts
└── README.md                   # This file
```

## ⚙️ Installation & Setup

### Prerequisites
- Node.js 16+ and npm
- Expo CLI: `npm install -g @expo/cli`
- iOS Simulator (Mac) or Android Studio (for emulators)
- Expo Go app on your mobile device (for testing)

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/Alosra-Recipez-Frontend.git
cd Alosra-Recipez-Frontend
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Configuration
```bash
# Copy environment template (if you create one)
cp .env.example .env
```

### 4. Configure API Connection
Update `services/api.js` with your backend URL:
```javascript
// For development - use your computer's IP address
const API_BASE_URL = 'http://192.168.1.100:8000'; // Replace with your IP

// For production
const API_BASE_URL = 'https://your-backend-api.herokuapp.com';
```

### 5. Start Development Server
```bash
# Start Expo development server
npx expo start

# Or with specific options
npx expo start --clear  # Clear cache
npx expo start --web    # Run web version only
```

### 6. Run on Devices
- **Web Browser**: Press `w` in terminal or visit `http://localhost:19006`
- **iOS Simulator**: Press `i` in terminal (Mac only)
- **Android Emulator**: Press `a` in terminal
- **Physical Device**: Install Expo Go app and scan QR code

## 📱 App Features & Screenshots

### Authentication Flow
```
Login Screen → Register Screen → Main App
     ↓              ↓              ↓
  Email/Pass    Personal Info   Home Screen
```

**Key Features:**
- Secure JWT-based authentication
- Form validation with user-friendly error messages
- Remember login across app sessions
- Profile management and editing

### Recipe Discovery Journey
```
Home Screen → Category View → Recipe Details → Add to Cart
     ↓              ↓              ↓              ↓
  All Categories  Filtered List  Full Details   Cart Update
```

**Key Features:**
- Horizontal scrollable category tabs
- Grid layout recipe cards with images and pricing
- Detailed recipe view with serving size controls
- Real-time price calculation based on serving size

### Shopping & Ordering
```
Cart Review → Checkout → Order Confirmation → Order Tracking
     ↓           ↓            ↓                  ↓
  Edit Items  Delivery Info  Order Number   Status Updates
```

**Key Features:**
- Persistent shopping cart across sessions
- Dynamic quantity adjustment with price updates
- Delivery address management
- Order history with status tracking

## 🎨 User Interface Design

### Design System
- **Primary Color**: #007AFF (iOS Blue)
- **Secondary Color**: #4CAF50 (Success Green)
- **Accent Color**: #FF9500 (Orange for food)
- **Background**: #F8F9FA (Light Gray)
- **Text**: #333333 (Dark Gray)

### Mobile-First Approach
- **Responsive Design**: Optimized for various screen sizes
- **Touch-Friendly**: Large tap targets and gesture support
- **Accessibility**: High contrast colors and screen reader support
- **Performance**: Optimized images and lazy loading

### Component Library
```javascript
// Example usage of reusable components
<CustomButton 
  title="Add to Cart" 
  onPress={handleAddToCart}
  loading={isLoading}
  style="primary"
/>

<RecipeCard 
  recipe={recipe}
  onPress={() => navigation.navigate('RecipeDetail')}
  showPrice={true}
/>
```

## 🔧 Development Workflow

### Running Different Environments
```bash
# Development with live reload
npx expo start --dev-client

# Production build testing
npx expo start --no-dev --minify

# Web development
npx expo start --web

# Clear cache and restart
npx expo start --clear
```

### Debugging
```bash
# React Native Debugger
npm install -g react-native-debugger

# Expo Developer Tools
# Available at http://localhost:19002 when running expo start
```

### Code Quality
```bash
# Linting (if configured)
npm run lint

# Formatting (if using Prettier)
npm run format

# Testing (if tests are added)
npm test
```

## 📡 API Integration

### Authentication Flow
```javascript
// Login example
const loginUser = async (credentials) => {
  try {
    const response = await authService.login(credentials);
    if (response.success) {
      // Token stored automatically in AsyncStorage
      // User redirected to main app
      setUser(response.data.user);
    }
  } catch (error) {
    showAlert('Login Failed', error.message);
  }
};
```

### Data Fetching Patterns
```javascript
// Recipe loading with error handling
const [recipes, setRecipes] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
  const fetchRecipes = async () => {
    try {
      setLoading(true);
      const result = await recipeService.getRecipesByCategory(categoryId);
      if (result.success) {
        setRecipes(result.data);
      } else {
        setError(result.error);
      }
    } catch (err) {
      setError('Failed to load recipes');
    } finally {
      setLoading(false);
    }
  };

  fetchRecipes();
}, [categoryId]);
```

### Real-time Cart Updates
```javascript
// Cart context for global state management
const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const addToCart = async (recipe, servingSize) => {
    const calculatedPrice = recipe.base_price * servingSize;
    // API call to backend
    const result = await cartService.addItem({
      recipe_id: recipe.id,
      number_of_people: servingSize
    });
    
    if (result.success) {
      updateCartState(result.data);
    }
  };
};
```

## 🧪 Testing Strategy

### Component Testing
```javascript
// Example test structure
describe('RecipeCard Component', () => {
  test('displays recipe information correctly', () => {
    // Test recipe card rendering
  });
  
  test('handles press events', () => {
    // Test navigation on tap
  });
  
  test('shows loading state', () => {
    // Test loading spinner
  });
});
```

### Integration Testing
- API connection testing with mock responses
- Navigation flow testing between screens
- Authentication state persistence testing
- Cart functionality end-to-end testing

### Manual Testing Checklist
- [ ] Authentication flow (login, register, logout)
- [ ] Recipe browsing and filtering
- [ ] Cart management (add, update, remove items)
- [ ] Order placement and confirmation
- [ ] Profile management
- [ ] Error handling and offline behavior

## 🚀 Build & Deployment

### Expo Build Process
```bash
# Build for development
npx expo run:ios
npx expo run:android

# Build for production
eas build --platform all

# Build web version
npx expo export:web
```

### Deployment Options

#### Option 1: Expo Publishing
```bash
# Publish to Expo servers
npx expo publish

# Your app will be available at:
# https://expo.dev/@yourusername/alosra-recipez
```

#### Option 2: Web Deployment (Netlify/Vercel)
```bash
# Build web version
npx expo export:web

# Deploy to Netlify
npm install -g netlify-cli
netlify deploy --prod --dir web-build
```

#### Option 3: App Store Deployment
```bash
# Build production APK/IPA
eas build --platform all

# Submit to stores
eas submit
```

### Environment-Specific Builds
```javascript
// app.json configuration for different environments
{
  "expo": {
    "name": "Alosra Recipez",
    "slug": "alosra-recipez",
    "version": "1.0.0",
    "platforms": ["ios", "android", "web"],
    "icon": "./assets/icon.png",
    "splash": {
      "image": "./assets/splash.png",
      "backgroundColor": "#007AFF"
    }
  }
}
```

## 📊 Performance Optimization

### Image Optimization
- Optimized image sizes for different screen densities
- Lazy loading for recipe images
- Cached images to reduce network requests

### State Management
- Efficient re-renders with React.memo and useMemo
- Optimized Context providers to prevent unnecessary updates
- Local state for UI-only changes, global state for shared data

### Network Optimization
- Request caching for static data (categories, recipes)
- Optimistic updates for cart operations
- Offline support with local data caching

## 🔒 Security & Privacy

### Data Protection
- JWT tokens stored securely in AsyncStorage
- Automatic token refresh before expiration
- Sensitive data encrypted in local storage

### User Privacy
- Minimal data collection (only necessary for app functionality)
- Clear privacy policy regarding data usage
- Secure API communication over HTTPS

### Security Best Practices
- Input validation on all forms
- SQL injection prevention through API design
- Cross-site scripting (XSS) protection

## 📝 Next Steps

### Phase 2 Enhancements
- **Push Notifications**: Real-time order status updates
- **Social Features**: Recipe sharing and user reviews
- **Favorites System**: Save and organize favorite recipes
- **Advanced Search**: Filter by dietary restrictions, prep time, ingredients
- **Offline Mode**: Browse cached recipes without internet connection

### Phase 3 Features
- **Recipe Recommendations**: AI-powered personalized suggestions
- **Cooking Timer**: Built-in timers for recipe steps
- **Shopping List**: Generate grocery lists from multiple recipes
- **Meal Planning**: Weekly meal planning with automated ordering
- **Multi-language Support**: Arabic interface for local users

### Technical Improvements
- **Performance Monitoring**: Real-time app performance tracking
- **A/B Testing**: UI/UX optimization through user testing
- **Advanced Analytics**: User behavior insights for app improvement
- **Accessibility**: Enhanced support for users with disabilities

## 🤝 Contributing

### Getting Started with Development
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Install dependencies: `npm install`
4. Start development server: `npx expo start`
5. Make your changes and test thoroughly
6. Commit changes: `git commit -m 'Add amazing feature'`
7. Push to branch: `git push origin feature/amazing-feature`
8. Open a Pull Request

### Development Guidelines
- Follow React Native best practices
- Use TypeScript for new features (gradual migration)
- Write meaningful commit messages
- Test on both iOS and Android before submitting
- Update documentation for new features

## 📞 Support & Contact

### Credits
- **Developer**: Zainab Nooh
- **Project Duration**: 7 Days sprint development
- **Institution**: General Assembly
- **Course**: Software Engineering Immersive
- **Instructor**: Kristina VanBergen-DeSilva, Arthur Bernier Jr
- **Trello**: [Board](https://trello.com/invite/b/68c887811e53f9b6c599fc93/ATTI1bb68c3e2b0734f35638a5acb7046e0e6D55DD19/alosra-recipez)
- **ERD**: [Alosra-Recipez-ERD](https://drive.google.com/file/d/1xK3a63Aosz0zBxTmPSNfPNyck5wx8n9E/view?usp=sharing)
- **Wireframe**: [Alosra-Recipez-Wireframe](https://excalidraw.com/#json=lpgfANaD60Ycjg9txNL5N,nmz9QW7U0urdnvqE_XcA8A)


### Technical Support
- **GitHub Issues**: [Report Bug/Request Feature](https://github.com/zainab-nooh/Alosra-Recipez-Frontend/issues)
- **Expo Documentation**: [React Native with Expo](https://docs.expo.dev/)
- **Backend API**: [Alosra-Recipez-Backend](https://github.com/zainab-nooh/Alosra-Recipez-Backend)

### Business Context
This mobile application addresses real challenges in the Bahraini food market by connecting home cooks with pre-measured, fresh ingredients delivered directly from trusted local supermarkets, making authentic home cooking accessible to busy modern lifestyles.

---

## 📄 License

This project was developed for educational purposes as part of the General Assembly Software Engineering Immersive program.

---

**Made with ❤️ and ☕ for food lovers in Bahrain**

*"Bringing authentic flavors to your kitchen, one recipe at a time"*