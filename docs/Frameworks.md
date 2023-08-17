# Frameworks

- [Frameworks](#frameworks)
  - [Introduction](#introduction)
  - [Framework selection](#framework-selection)
  - [Comparison metrics](#comparison-metrics)
    - [Documentation quality metrics](#documentation-quality-metrics)
      - [Metric weight](#metric-weight)
    - [Community support metrics](#community-support-metrics)
      - [Metric weight](#metric-weight-1)
    - [Community contributions metrics](#community-contributions-metrics)
      - [Open-Closed issue ratio](#open-closed-issue-ratio)
        - [Metric weight](#metric-weight-2)
      - [Pull requests](#pull-requests)
        - [Metric weight](#metric-weight-3)
      - [Stars](#stars)
        - [Metric weight](#metric-weight-4)
    - [Testing](#testing)
        - [Metric weight](#metric-weight-5)
    - [Release recency](#release-recency)
      - [Metric weight](#metric-weight-6)
  - [Framework comparison chart](#framework-comparison-chart)
  - [Comparison result](#comparison-result)
  - [Prototyping conclusion](#prototyping-conclusion)
    - [Flutter](#flutter)
      - [Summary](#summary)
    - [React Native](#react-native)
    - [Conclusion](#conclusion)
  - [Citations](#citations)

## Introduction

This document describes the research for selecting a hybrid mobile framework for single-codebase cross-platform mobile development .This document aims to compare the most popular hybrid frameworks and provide a substantiated choice for the framework to be used in future development.

## Framework selection

The following table contains a list of frameworks that can be used to build hybrid mobile apps. Elements for the table were chosen based on the criteria that at least three websites mention as a possible mobile app hybrid framework. We decided only to compare six frameworks in the initial round to simplify the task of collecting data for them and make it easier to filter the list down.

The following frameworks were chosen:

- `Flutter`: It is a Google-developed cross-platform framework that allows developers to build native apps for iOS and Android from a single codebase. It uses Dart as its programming language and translates it to native code [1].
- `Tauri`: Tauri is a framework that allows developers to build desktop apps using web technologies. It uses the system's native, built-in web renderer. Its backend is written in Rust [2]. It supports compiling the codebase to native code for Windows, macOS, and Linux, and its mobile app support is in Alpha [3].
- `React Native`: React Native is a framework that allows developers to build native apps for iOS and Android using JavaScript and React. It invokes Android's or iOS's native UI components and does not use WebView [4].
- `Ionic`: Ionic is a framework that allows developers to build native apps for iOS and Android using JavaScript and Angular, React, or Vue. It uses WebView to render the app [5].
- `NativeScript`: NativeScript is popular for building native mobile apps using JavaScript, HTML, and CSS. It has a runtime on top of the V8 and JavaScriptCore engines, and it uses WebView to render the app [7]. With native APIS, it can access the device's Camera, accelerometer, and other hardware.
- `Kivy`: Kivy is a Python-based framework that allows developers to build native apps for iOS, Android, Windows, macOS, and Linux. It was first released in 2011. Kivy does not have native controls or widgets; instead, they are all custom-made and use OpenGL to render the app with GPU acceleration of its graphics [8].

## Comparison metrics

This chapter describes the comparison metrics used in the summing-up and comparison table.

### Documentation quality metrics

The documentation quality metrics were assessed based on the combinations of the answers in the table below. Each framework was assigned a grade from 1 (poor) to 5 (outstanding) based on a set of combinations defined in the grades table.

| Mark | Answers question |
|--|--|
| F | Is a documentation index available, and is that index or the documentation itself searchable? |
| E | Does the documentation provide real-life examples? |
| I | Is it quick to install? (can be installed within 5 minutes) |
| S | Is a project quick to set up? (can be set up within 15 minutes) |

| Grade | Combinations |
|-|-|
| 5 | [F] [E] [I] [S] |
| 4 | [F] [E] [S] or [F] [E] [I] |
| 3 | [F] [E] |
| 2 | [F] [S] or [F] [I] |
| 1 | Other values |

For us, `findability` is the most important documentation quality. `Findability` means whenever we want to find something specific (how to use an API or component), it is easy to find (via search or index). Therefore, it ensures that we can find solutions quickly.

The second most important is `real-life examples`. Documentation can often be verbose and overwhelming with many parameters. Examples ensure that we can quickly write the feature.

The third most important is the ease of `setup`, as it is an experience we would have to go through every time we create a new application, even after installation.

The least essential documentation quality is how easy it is to `install` the framework since once it is installed, this documentation quality does not matter anymore.

The weights are then defined based on the combinations of these questions and their importance to us.

#### Metric weight

The weight for the documentation quality metric is a 5 (very important) because this metric describes how easy it is to find solutions to problems. If it is easy to find solutions, it is easier to solve problems, which increases productivity.

### Community support metrics

The "Community support" metric was assessed based on the number of answered questions on the framework's StackOverflow tag(s). A grade from 1 (poor) to 5 (outstanding) was assigned to each framework based on the ratio between the framework's number of answers and the average number of answers. The highest and lowest grade values were calculated based on the best and worst results observed.

The weight for the community support metric is a 5 (very important) because this metric describes how active the community is. If it is more activity, there are more questions asked. Thus it is easier to solve problems and find solutions to questions, which increases productivity.

The average is: `45499`

- Flutter: `122589`
- Tauri: `83`
- React Native: `96721`
- Ionic: `37496`
- NativeScript: `5604`
- Kivy: `10506`

The data was collected on `15 February 2023`.

| Grade | Framework / Average |
|-------|---------------------|
| 5 | > 2 |
| 4 | 1 - 2 |
| 3 | 0.5 - 1 |
| 2 | 0.1 - 0.5 |
| 1 | < 0.1 |

#### Metric weight

The weight for the community support metric is a 5 (very important) because this metric describes how active the community is. If it is more activity, there are more questions asked. Thus it is easier to solve problems by finding answers to questions.

### Community contributions metrics

The "Community contributions" metric was assessed based on the number of stars, pull requests, and the ratio of open-to-closed issue tickets found on GitHub. A grade from 1 (poor) to 5 (outstanding) was assigned to each framework based on the ratio between the framework's result and the average for that category. The highest and lowest grade values were calculated based on the best and worst results observed.

The data was collected on `15 February 2023`.

#### Open-Closed issue ratio

Ratio average: `0.14`

- Flutter: `0.169`
- Tauri: `0.167`
- React Native: `0.09`
- Ionic: `0.024`
- NativeScript: `0.163`
- Kivy: `0.23`

| Grade | Framework / Average |
|-------|---------------------|
| 5 | < 0.2 |
| 4 | 0.2 - 0.5 |
| 3 | 0.5 - 1 |
| 2 | 1 - 1.5 |
| 1 | > 1.5 |

##### Metric weight

The weight for this metric is 4/5. This is an important community metric because the more issues are closed, the more active and involved the community is with the framework. The community is more likely to help with problems, and the framework is more likely to be updated with new features. A more active community means the framework is more future-proof.

#### Pull requests

Pull requests: `10566`

- Flutter: `41469`
- Tauri: `3174`
- React Native: `11843`
- Ionic: `5957`
- NativeScript: `3460`
- Kivy: `3400`

| Grade | Framework / Average |
|-------|---------------------|
| 5 | > 3.5 |
| 4 | 2 - 3.5 |
| 3 | 1 - 2 |
| 2 | 0.5 - 1 |
| 1 | < 0.5 |

##### Metric weight

The weight for this metric is 3/5. This is a moderately important community metric because the more pull requests are made, the more active the community is in further developing the framework. This activity means many bugs are fixed, new features are added, and the framework is more mature.

#### Stars

Stars: `67170`

- Flutter: `150128`
- Tauri: `58896`
- React Native: `107666`
- Ionic: `48607`
- NativeScript: `22204`
- Kivy: `15522`

| Grade | Framework / Average |
|-------|---------------------|
| 5 | > 2 |
| 4 | 1 - 2 |
| 3 | 0.5 - 1 |
| 2 | 0.25 - 0.5 |
| 1 | < 0.25 |

##### Metric weight

The weight for this metric is 2/5. It is a less important community metric because the more stars a framework has, the more popular it is. This popularity is just a user preference, so this metric is unimportant.

### Testing

The "Testing" metric was assessed based on support for the following testing methodologies directly in the framework's language:

| Mark | Meaning |
|--|--|
| U | Unit testing |
| E | End-to-end testing |
| I | Integration testing |

| Grade | Combination |
|-------|---------------------|
| 5 | [U] [E] [I] |
| 4 | [U] [E] |
| 3 | [U] [I] |
| 2 | [E] [I] |
| 1 | Other values |

Unit testing is the most crucial testing methodology because we can test the proper functionality of individual functions, components, and elements that comprise the entire software. End-to-end testing is the second most important testing methodology to support because we can ensure that the software behaves on the user interaction level as expected. Finally, integration testing is the third most crucial testing methodology to support. With integration testing, we can ensure that our servers can correctly communicate with the database and that their API endpoints work as intended.

##### Metric weight

The weight for this metric is 3/5. Testing is essential. However, testing is only vital if the framework is easy to use and the documentation is good. Testing comes after usability and documentation.

### Release recency

The "Release recency" metric was assessed based on the recency of the last public release (including non-final releases):

| Mark | Meaning |
|--|--|
| 5 | < 2 weeks ago |
| 4 | 2 weeks - 1 month ago |
| 3 | 1 - 3 months ago |
| 2 | 3 months - 1 year ago |
| 1 | > 1 year ago |

The data was collected on `15 February 2023`.

#### Metric weight

The more recent the last public release, the better the release recency. The weight for this metric is 5/5. It is the most important metric for us. We want to use a framework that is actively developed and maintained. This activity means the framework is not abandoned and will be updated with new features and bug fixes. Furthermore, the more recent the last public release, the more likely to have the most recent security patches and technologies.

## Framework comparison chart

| Comparison metric | Metric weight | Flutter | React Native | Ionic | Tauri | NativeScript | Kivy |
|-------------------|---------------|---------|--------------|-------|-------|--------------|------|
| Documentation quality | 5/5 | 4/5 | 2/5 | 5/5 | N/A* | N/A* | N/A* |
| Community support | 5/5 | 5/5 | 5/5 | 3/5 | 1/5 | 2/5 | 2/5 |
| Community contributions - Stars | 2/5 | 5/5 | 4/5 | 3/5 | 3/5 | 2/5 | 1/5 |
| Community contributions - Pull Requests | 3/5 | 5/5 | 3/5 | 2/5 | 1/5 | 1/5 | 1/5 |
| Community contributions - Open-Closed ratio | 4/5 | 2/5 | 3/5 | 5/5 | 1/5 | 2/5 | 1/5 |
| Testing | 3/5 | 5/5 | 5/5 | 4/5 (Only Angular & React) | N/A* | N/A* | N/A* |
| Release recency | 5/5 | 4/5 | 5/5 | 5/5 | 5/5 | 4/5 | 2/5 |
| Notable apps | N/A** | Google Pay [6] | Discord, PlayStation, Tesla [9] | None | N/A* | N/A* | N/A* |

> [*] During the early stages of the comparison process, we noticed that `Tauri`, `NativeScript`, and `Kivy` were significantly underperforming on community and update metrics. Because of that underperformance and the assignment recommendation to only compare three frameworks, we chose to drop these frameworks before researching the sections currently marked as `N/A`
>
> [**] This metric does not affect the final comparison and thus has no weight. It is purely informational.

## Comparison result

Based on the collected data on the three frameworks, it is apparent that Ionic underperforms in a lot of our chosen criteria. Specifically, it scored notably lower in community support and popularity metrics, which we value highly. Thus, React Native and Flutter are the two frameworks we chose to be compared using rapid prototyping.

Despite React's documentation being harder to parse and not offering some common features (i.e., camera control) out of the box, it has significant community support with many plugins.

While it is rather tricky to install and set up Flutter for a project (environmental variables, XCode, binaries, etc.) and uses a custom programming language (Dart), creating a steeper learning curve, Flutter still outperforms React Native with community support.

## Prototyping conclusion

In this chapter, we summarize our experiences while prototyping the two frameworks with our chosen technologies: FLutter and React Native. Furthermore, we collected the pros and cons for each framework. Finally, based on the collected data, we will decide which framework is the best for developing a hybrid mobile application.

### Flutter

- Pro:
  - The entire framework works on an easy-to-understand concept: widgets.
  - There are only two types of widgets to learn in Flutter: stateless and stateful.
  - Building components by embedding widgets into each other is simple.
  - Flutter comes with many out-of-the-box widgets implementing styling standards (Material & Cupertino), making it easy and fast to build a consistent and stylish UI
  - Managing states in stateful widgets is effortless
  - Handling pages, navigation, and routing is easy
  - Debugging, running the app in a simulator, and hot reloading are very easy and quick
  - Dart has a low learning curve
  - Easy to define themes (colors) for the entire app and add support for dark and light mode
  - Flutter apps work on both iOS and Android without having to test/configure much. Only permissions must be defined in the manifest files, and all the components work consistently on both platforms.
  - The project size is small in terms of the number of files and project size.
  - Easy to translate CSS selectors into their Dart widget equivalent
- Con:
  - Flutter heavily relies on Dart packages. Many functionalities do not ship with Flutter and need to be installed separately. If there is no package for a specific functionality made by the community, it is necessary to write it yourself, which is rather time-consuming.
  - Many Flutter components offered by Flutter are "fake native ."Popups and date-time pickers look like native components (Material or Cupertino) but are not. This "overly-consistent" appearance can cause confusion on another platform.
  - Even though there is a testing framework provided by Flutter to test the widgets and the logic with unit tests, it is challenging to set them up. Documentation on widget testing is abysmal, and the error messages are not helpful. Running the tests is also very confusing and slow. In general, testing in Flutter is unnecessarily challenging.
  - Styling Flutter outside the provided design standards (Material, Cupertino) is not straightforward or easy to do. It is possible to define themes (colors) used by the design standard, but that is how far it gets with easy, built-in styling. This limitation makes many Flutter apps look very alike, and deviating from the design standards is difficult. In addition, using custom styling libraries, with TailwindCSS, for example, is impossible.

#### Summary

One of the key strengths of Flutter is its documentation. The documentation is comprehensive and easy to understand, with plenty of examples and code snippets. We could easily find live demos of the components and widgets, and the documentation is well-organized and easy to navigate. The package index, pub.dev, that Flutter uses is excellent. The website gave a great first impression on what package is better or safer to use.

The community support for Flutter is also great. We could find solutions to most of the problems by searching through the various online forums, GitHub repositories, and StackOverflow posts. The community is very active and responsive, and there are many open-source packages available that can help developers add new features and functionality to their apps.

However, testing with Flutter can be more difficult and time-consuming than we initially researched. Despite having many tools and libraries available for testing, Flutter is often unclear on how to properly do testing and what solutions there are for testing errors. Additionally, testing requires a lot of manual setup and configuration, which can be time-consuming.

Styling the components with Flutter was also surprisingly quick. Granted, it was only simple if we used the Material or Cupertino design standards (but not at the same style). This is because Flutter offered us a 'theming' option. Both Cupertino and Material widgets had an easy way to theme. Sadly applying one theme to an other, or applying a theme to custom widgets was really inconvenient and required a lot of manual work.

Overall, Flutter is an amazing Hybrid framework. It offers a lot of functionality out of the box, such as locals, theming, light and dark modes, page navigation, and many more. These are easy to setup and use. Developing with Flutter is also pleasant. The debugger is well setup and integrated into VS Code. The hot reload is also very fast, and reliable. The project size (in terms of files, and size) is also very small. What we found unfortunate is that Flutter "fakes" a lot of native components, making them look native when in fact they are not (such as time pickers, etc.). This can cause confusion on another platform. However, we would definitely use Flutter again for a future project.

### React Native

- Pro:
  - All UI elements are written as HTML
  - All styling is done via CSS
  - All app logic is written in JS/TS
  - With a base knowledge of JavaScript, TypeScript is easy to learn
  - Lots of community packages thanks to framework maturity
  - Easy debugging and descriptive error reports
  - Native integration with OS APIs make the app work predictably across platforms
  - Native UI styling via OS API calls makes the app look platform-native without customization
- Con:
  - Has very few components built in. Anything beyond simple inputs, lists, and buttons requires external packages or custom code
  - Has very little OS-native functionality built in. Most common functionality like Calendar, Contacts, and Geolocation are entirely relegated to community-packages
  - Navigation between screens within the app requires external packages
  - Not all community packages work out of the box across platforms
  - Not all CSS attributes are supported, and some have different naming or support different values than standard
  - Project file and executable sizes are large

### Conclusion

Based on our research, prototyping experience, and the functionality requirements for our app idea, we concluded that Flutter is the better hybrid mobile framework to use.

Flutter and React native provide a great developer experience based on how easy and fast it is to develop a stylish app. With Flutter offering two built-in design languages (Material and Cupertino) and easy further styling of components with CSS-like widgets, and React Native providing granular CSS customizability of already OS-native component designs, both frameworks help apps look presentable and professional. The main area in which the frameworks differ, and why for us Flutter prevailed, is the built-in functionality. While both frameworks integrate with native OS APIs to provide consistent functionality across platforms, React Native offers far fewer built-in components and libraries to accomplish basic tasks. Actions like Pagination, Geolocation, or accessing the Camera, which come with Flutter, require community-developed packages with React as the framework developers recently chose to deprecate them. Unfortunately, when it comes to those community packages, many of them don't work out of the box across platforms. Additionally, Flutter, made by Google, integrates way better with other Google services. For instance, using Google Maps is easier in Flutter than in React Native.

---

## Citations

[1] App-vise, "Wat is flutter en waarom zou je er voor Kiezen?," App Vise, 2022. [Online]. Available: <https://www.app-vise.nl/blog/waarom-kiezen-voor-flutter/>. [Accessed: 15-Feb-2023].

[2] I. Gerchev, "Tauri: Fast, cross-platform desktop apps," SitePoint, 15-Dec-2022. [Online]. Available: <https://www.sitepoint.com/tauri-introduction/>. [Accessed: 15-Feb-2023].

[3] L. Nogueira, "Announcing the Tauri mobile alpha release: Tauri Apps," Tauri Apps RSS, 09-Dec-2022. [Online]. Available: <https://tauri.app/blog/2022/12/09/tauri-mobile-alpha/>. [Accessed: 15-Feb-2023].

[4] O'Reilly, "Learning react native," O'Reilly Online Learning, 30-Jan-2019. [Online]. Available: <https://www.oreilly.com/library/view/learning-react-native/9781491929049/ch01.html/>. [Accessed: 15-Feb-2023].

[5] A. Mittal, "What is Ionic Framework? and why use it over other frameworks?," Hackr.io, 15-Dec-2022. [Online]. Available: <https://hackr.io/blog/ionic-framework/>. [Accessed: 15-Feb-2023].

[6] S. Khomutova, "Top 24 famous apps built with flutter framework," Apexive, 21-Oct-2022. [Online]. Available: <https://apexive.com/post/top-apps-built-with-flutter-framework/>. [Accessed: 16-Feb-2023].

[7] A. Varangaonkar, "NativeScript: What is it, and how to set it up," Packt Hub, 09-Oct-2018. [Online]. Available: <https://hub.packtpub.com/nativescript-set-up/>. [Accessed: 15-Feb-2023].

[8] M. Driscoll, "Build a mobile application with the Kivy Python framework," Real Python, 26-Sep-2020. [Online]. Available: <https://realpython.com/mobile-app-kivy-python/>. [Accessed: 15-Feb-2023].

[9] Meta Platforms, "Showcase - REACT native," React Native, 2023. [Online]. Available: <https://reactnative.dev/showcase/>. [Accessed: 16-Feb-2023].
