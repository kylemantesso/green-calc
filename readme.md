# Green Calculator

## Run

`yarn install`
`yarn ios` or `yarn android` (android needs emulator running)

## Assumptions
 - UX based off calculator in iOS

## Further development
 - More extensive unit tests handling more scenarios
 - Better handling of really large numbers (add maximum)
 - Better handling of error scenarios (divide by 0 etc)
 - Break up `handler` function in `AppContext` for better testing
 - More UI development
 - Functional/E2E tests (using Detox or similar)
 - Add fastlane and CI for automated deployments to stores
