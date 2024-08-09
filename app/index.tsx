import { View } from 'react-native'
import { Link } from 'expo-router'

const IndexView = () => (
  <>
    <View>
      <Link href="/broken">Broken - with layout</Link>
    </View>
    <View>
      <Link href="/working">Working - no layout</Link>
    </View>
  </>
)

export default IndexView
