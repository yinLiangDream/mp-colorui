import path from 'path'
import RollupJson from '@rollup/plugin-json'
import RollupNodeResolve from '@rollup/plugin-node-resolve'
import RollupCommonjs from '@rollup/plugin-commonjs'
import RollupTypescript from 'rollup-plugin-typescript2'
import RollupCopy from 'rollup-plugin-copy'
import sass from 'rollup-plugin-sass';
import Package from '../package.json'

const resolveFile = filePath => path.resolve(__dirname, '..', filePath)
const resolveFilePosix = filePath => path.resolve(__dirname, '..', filePath).split(path.sep).join(path.posix.sep)

const externalPackages = [
  'react',
  'react-dom',
  '@tarojs/components',
  '@tarojs/runtime',
  '@tarojs/taro',
  '@tarojs/react'
]

export default {
  input: resolveFile(Package.source),
  output: [
    {
      file: resolveFile(Package.main),
      format: 'cjs',
      sourcemap: true
    },
    {
      file: resolveFile(Package.module),
      format: 'es',
      sourcemap: true
    }
  ],
  external: externalPackages,
  plugins: [
    sass(),
    RollupNodeResolve({
      customResolveOptions: {
        moduleDirectory: 'node_modules'
      }
    }),
    RollupCommonjs({
      include: /\/node_modules\//
    }),
    RollupJson(),
    RollupTypescript({
      tsconfig: resolveFile('tsconfig.rollup.json')
    }),
    RollupCopy({
      targets: [
        {
          src: resolveFilePosix('src/style'),
          dest: resolveFilePosix('dist'),
        }
      ]
    }),
  ]
}
