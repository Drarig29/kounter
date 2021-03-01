import { DefinePlugin } from 'webpack';

export default function (config, env, helpers) {
  const PUBLIC_PATH = env.production ? '/kounter/' : '';
  config.output.publicPath = PUBLIC_PATH;
  config.plugins.push(new DefinePlugin({ PUBLIC_PATH }));
}