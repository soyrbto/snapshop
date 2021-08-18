import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'SnapShop',
  webDir: 'www',
  bundledWebRuntime: false,
  server: {
    url: "http://10.0.0.14:8100"
  }
};

export default config;
