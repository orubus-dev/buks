// https://developer.android.com/build#settings-file
pluginManagement {
    repositories {
        // Optional local acceleration (opt-in via gradle property, e.g. rate-limited networks)
        if (providers.gradleProperty("buks.mirrors").isPresent) {
            maven("https://maven.aliyun.com/repository/google")
            maven("https://maven.aliyun.com/repository/public")
            maven("https://maven.aliyun.com/repository/gradle-plugin")
        }
        gradlePluginPortal()
        google()
        mavenCentral()
    }
}

dependencyResolutionManagement {
    repositoriesMode.set(RepositoriesMode.FAIL_ON_PROJECT_REPOS)
    repositories {
        if (providers.gradleProperty("buks.mirrors").isPresent) {
            maven("https://maven.aliyun.com/repository/google")
            maven("https://maven.aliyun.com/repository/public")
        }
        google()
        // JitPack-only groups (com.github.*) never exist on Central — keep Central
        // out of those lookups so rate-limited networks don't stall the build.
        mavenCentral {
            content { excludeGroupByRegex("com\\.github\\..*") }
        }
        mavenLocal()
        maven("https://jitpack.io") {
            content { includeGroupByRegex("com\\.github\\..*") }
        }
    }
}

rootProject.name = "Buks"
include(":app")
