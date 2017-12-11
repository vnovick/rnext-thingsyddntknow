// Import React
import React from "react";
import "./index.css";
// Import Spectacle Core tags
import {
  Deck,
  Heading,
  ListItem,
  List,
  Slide,
  Text,
  Code,
  Link,
  BlockQuote,
  Layout,
  Fill,
  Quote,
  Cite,
  Image
} from "spectacle";

import CodeSlide from "spectacle-code-slide";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const theme = createTheme({
  primary: "#03172E",
  secondary: "white",
  tertiary: "#b6d6c1",
  quartenary: "#F50600"
}, {
  primary: "indira_kregular",
  secondary: "Helvetica"
});

const bg = require('../assets/bg.jpg');


export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={[]} transitionDuration={0} theme={theme} progress="none" controls={false}>
        <Slide bgColor="primary" bgImage={require("../assets/things-youdidntknow.png")} />
        <Slide bgColor="primary" bgImage={bg}>
          <Heading size={1} caps lineHeight={1} textColor="quartenary">
            You can do with React Native
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={3} lineHeight={1} textColor="secondary">
            @VladimirNovick
          </Heading>
          <Text textColor="tertiary">
            vladjs.com
          </Text>
          <Image style={{ marginTop: "40px" }} src={require('../assets/codevalue.png')} />
        </Slide>
        <Slide>
          <Heading size={3} lineHeight={1} textColor="secondary">
            Non Standard Animations
          </Heading>
        </Slide>
        <Slide>
          <Heading size={3} lineHeight={1} textColor="secondary">
            Physical Things
          </Heading>
        </Slide>
        <Slide>
          <Heading size={3} lineHeight={1} textColor="secondary">
            Bridging taken to extreme
          </Heading>
        </Slide>
        <Slide>
          <Heading size={3} lineHeight={1} textColor="secondary">
            Why Animations are important?
          </Heading>
        </Slide>
        <Slide>
          <BlockQuote>
            <Quote textColor="secondary">Magic is both in the details and in the performance</Quote>
            <Cite>Dariel Fitzkee, magician</Cite>
          </BlockQuote>
        </Slide>
        <Slide>
          <Heading size={3} lineHeight={1} textColor="secondary">Our regular solutions</Heading>
          <List style={{ listStyle: 'none' }}>
            <ListItem><Text lineHeight={2} textColor="tertiary" textFont="secondary" italic>Animated</Text></ListItem>
            <ListItem><Text lineHeight={2} textColor="tertiary" textFont="secondary" italic>LayoutAnimation</Text></ListItem>
            <ListItem><Text lineHeight={2} textColor="tertiary" textFont="secondary" italic>react-native-animatable</Text></ListItem>
          </List>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={4} lineHeight={1} textColor="tertiary" italic>
            What if we want to get more complex results?
          </Heading>
        </Slide>
        <Slide>
          <Layout>
            <Fill>
              <Image style={{ height: '240px'}} src={require('../assets/lottie1.gif')} />
            </Fill>
            <Fill>
              <Image style={{ height: '240px'}} src={require('../assets/lottie3.gif')} />
            </Fill>
          </Layout>
          <Image src={require('../assets/lottie2.gif')} />
        </Slide>
        <Slide>
          <Heading size={3} lineHeight={1} textColor="secondary" textFont="secondary">react-native-lottie</Heading>
          <Text lineHeight={1} textColor="tertiary" italic>Renders <span style={{ color: "#f74c4f" }}>native</span> animations based on JSON exported from After Effects with BodyMovin plugin</Text>
        </Slide>
        <Slide>
          <Image width="40%" src={require('../assets/Lottie.gif')}/>
        </Slide>
        <CodeSlide
          transition={[]}
          lang="js"
          style={{ fontSize: "1.5rem" }}
          code={require("raw-loader!../codesamples/lottie-sample")}
          ranges={[
            { loc: [13, 14], note: "import library" },
            { loc: [24, 28], note: "set initial state" },
            { loc: [30, 37], note: "start animation on mount" },
            { loc: [51, 56], note: "Use lottie Animation" }
          ]}
        />
        <Slide bgColor="primary">
          <Heading size={4} lineHeight={1} textColor="tertiary" italic>
            What if we want to work with images content
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={4} lineHeight={1} textColor="tertiary" italic>
            Or make really custom transitions
          </Heading>
        </Slide>
        <Slide>
          <iframe height="500px" width="100%" src="https://www.youtube.com/embed/Prttbtoffks?rel=0&controls=0&showinfo=0" frameBorder="0" allowFullscreen />
        </Slide>
        <Slide>
          <Heading size={3} lineHeight={1} textColor="secondary" textFont="secondary">gl-react-native-v2</Heading>
          <Text lineHeight={1} textColor="tertiary" italic>gl-react wrapper for react-native. Write shaders in OpenGL GLSL language</Text>
        </Slide>
        <Slide>
          <Image width="100%" src={require('../assets/Shader.png')}/>
        </Slide>
        <Slide>
          <Heading size={3} lineHeight={1} textColor="secondary">
            Physical things
          </Heading>
        </Slide>
        <Slide>
          <Heading size={4} lineHeight={1} textColor="tertiary" italic>
            Merging digital and physical worlds
          </Heading>
        </Slide>
        <Slide>
          <Heading size={5} textColor="tertiary" italic>By letting device to be aware of <span style={{ color: "#f74c4f" }}>physical context</span> we change the way we interact with a user and ultimately the way we develop our apps</Heading>
        </Slide>
        <Slide>
          <Heading size={4} lineHeight={1} textColor="tertiary" italic>
            Geolocation is not enough
          </Heading>
        </Slide>
        <Slide>
          <Heading size={4} lineHeight={1} textColor="tertiary" italic>
            Beacons for rescue
          </Heading>
          <Image width="100%" src={require('../assets/what_is_beacon_phone.png')}/>
        </Slide>
        <Slide>
          <Heading size={4} lineHeight={1} textColor="tertiary" italic>
            Tiny BLE transmitter, that transmits UUID and proximity over GAP protocol
          </Heading>
        </Slide>
        <Slide>
          <Heading size={4} lineHeight={1} textColor="tertiary" italic>
            What we can do with React Native and Beacons?
          </Heading>
        </Slide>
         <Slide>
          <Image src={require('../assets/beacon.jpg')}/>
        </Slide>
        <Slide>
          <Image width="100%" src={require('../assets/Blog_Sale_Beacon.jpg')}/>
        </Slide>
        <Slide>
          <Image width="100%" src={require('../assets/museum-beacons-1280x640.jpg')}/>
        </Slide>
        <Slide>
          <Image width="100%" src={require('../assets/AAEAAQAAAAAAAAisAAAAJGNjMzQ0ODMzLTk5NjctNGIxYS04OWFhLTUwNzM4ZDE2ZjMxNw.jpg')}/>
        </Slide>
        <Slide>
          <Heading size={4} textColor="tertiary" italic>By using physical context we try to <span style={{ color: "#f74c4f" }}>predict</span> user intent</Heading>
          <Image src={require('../assets/Ibeaconsmuseum.jpg')}/>
        </Slide>
        <Slide>
          <Heading size={4} textColor="secondary">General guidelines for <span style={{ color: "#f74c4f" }}>physical context</span> aware apps</Heading>
          <List style={{ listStyle: 'none' }}>
            <ListItem><Text lineHeight={2} textColor="tertiary" italic>Enable location services in our app</Text></ListItem>
            <ListItem><Text lineHeight={2} textColor="tertiary" italic>Start scanning for beacons</Text></ListItem>
            <ListItem><Text lineHeight={2} textColor="tertiary" italic>Check closest beacons against server</Text></ListItem>
            <ListItem><Text lineHeight={2} textColor="tertiary" italic>Execute custom logic based on closeset beacon</Text></ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={1} lineHeight={2} textColor="quartenary">It's Demo time!</Heading>
        </Slide>
        <Slide>
          <iframe height="500px" width="100%" src="https://www.youtube.com/embed/y_6E1iCPXEM?rel=0&controls=0&showinfo=0" frameBorder="0" allowFullscreen />
        </Slide>
        <Slide>
          <Code textColor="tertiary">react-native-beacon-manager</Code>
        </Slide>
        <CodeSlide
          transition={[]}
          lang="js"
          style={{ fontSize: "1.5rem" }}
          code={require("raw-loader!../codesamples/beacons-manager")}
          ranges={[
            { loc: [35, 36], note: "import library" },
            { loc: [38, 45], note: "regions list" },
            { loc: [46, 60], note: "Additional data for beacons" },
            { loc: [60, 62], note: "How accurate latitude and longitude in decimals" },
            { loc: [79, 83] },
            { loc: [85, 89], note: "request Authorization" },
            { loc: [90, 93], note: "get actual geolocation" },
            { loc: [93, 103], note: "find region relevant to geolocation" },
            { loc: [104, 111], note: "start searching for beacons in region" },
            { loc: [118, 129], note: "update beacons list in region" },
            { loc: [147, 151], note: "map on beacons and merge with data" },
            { loc: [63, 73], note: "merge beacon data" }
          ]}
        />
        <Slide>
          <Heading size={4} lineHeight={1} textColor="secondary">
            And what about smart homes?
          </Heading>
          <Image width="100%" src={require('../assets/iotfunny1.jpg')}/>
        </Slide>
        <Slide>
          <Heading size={1} lineHeight={2} textColor="quartenary">It's Demo time!</Heading>
        </Slide>
        <Slide>
          <iframe height="500px" width="100%" src="https://www.youtube.com/embed/iaD_qK94gho?rel=0&controls=0&showinfo=0" frameBorder="0" allowFullscreen />
        </Slide>
        <Slide>
          <Code textColor="tertiary">react-native-ble-plx</Code>
        </Slide>
        <CodeSlide
          style={{ fontSize: "1.5rem" }}
          transition={[]}
          lang="js"
          code={require("raw-loader!../codesamples/ledbulb.example")}
          ranges={[
            { loc: [11, 13], note: "import BleManager and Buffer" },
            { loc: [14, 15], note: "we should know UUID of our lightbulb" },
            { loc: [17, 21], note: "set our BleManager" },
            { loc: [22, 30], note: "define our state" },
            { loc: [32, 38], note: "subscribe to bluetooth status change" },
            { loc: [46, 50], note: "on initial toggle scan and connect" },
            { loc: [65, 70], note: "start looking for devices" },
            { loc: [78, 81], note: "stop scanning if led found" },
            { loc: [87, 88], note: "connect to device" },
            { loc: [111, 114], note: "discover services and characteristics" },
            { loc: [114, 118], note: "create base64 value" },
            { loc: [118, 125], note: "write value for characteristic of a service" },
            { loc: [97, 107], note: "Log our services and characteristics" },
          ]}
        />
        <Slide>
          <Heading size={4} lineHeight={1} textColor="secondary">
            Bridging taken to extreme
          </Heading>
        </Slide>
        <Slide>
          <Image width="50%" src={require('../assets/unity-logo-white.png')}/>
          <Layout>
            <Fill>
              <Image height="300px" src={require('../assets/android.png')}/>
            </Fill>
            <Fill>
              <Image height="300px" src={require('../assets/react-native-logo.png')}/>
            </Fill>
          </Layout>
        </Slide>
        <Slide>
          <iframe height="500px" width="100%" src="https://www.youtube.com/embed/3QsL9WPZBJA?rel=0&controls=0&showinfo=0" frameBorder="0" allowFullscreen />
        </Slide>
        <Slide>
          <Heading size={4} textColor="secondary">Don't be scared to bridge native modules. That's the main recipe to create cool stuff</Heading>
        </Slide>
        <Slide>
          <Heading size={3} textColor="secondary" italic>You were awesome!</Heading>
          <Heading size={6} textColor="tertiary" italic>Book <span style={{ color: "#f74c4f"}}>50%</span> discount code: <span style={{ color: "#f74c4f"}}>AURENA50</span></Heading>
          <Heading size={6} textColor="tertiary" italic>vladjs.com</Heading>
        </Slide>
        <Slide>
          <Heading size={3} textColor="secondary" italic>Book Raffle</Heading>
          <Heading size={6} textColor="tertiary" italic>tweet: #reactnative @reactnext <span style={{ color: "#f74c4f"}}>#rnbookraffle2 @VladimirNovick</span></Heading>
        </Slide>
        <Slide>
          <Heading size={3} textColor="secondary" italic>Thank you!</Heading>
        </Slide>
      </Deck>
    );
  }
}
