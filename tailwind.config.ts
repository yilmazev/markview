import type { Config } from "tailwindcss"

const config: Config = {
    content: [
        "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
    ],
    theme: {
        extend: {
            backgroundImage: {
                headerGrid: "url(\"data:image/svg+xml;utf8,%3Csvg viewBox=%220 0 2000 1400%22 xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cmask id=%22b%22 x=%220%22 y=%220%22 width=%222000%22 height=%221400%22%3E%3Cpath fill=%22url(%23a)%22 d=%22M0 0h2000v1400H0z%22%2F%3E%3C%2Fmask%3E%3Cpath fill=%22%230c0a09%22 d=%22M0 0h2000v1400H0z%22%2F%3E%3Cg style=%22transform-origin:center center%22 stroke=%22%23242424%22 stroke-width=%22.4%22 fill=%22none%22 mask=%22url(%23b)%22%3E%3Cpath d=%22M0 0h61v61H0zM61 0h61v61H61zM122 0h61v61h-61zM183 0h61v61h-61zM244 0h61v61h-61zM305 0h61v61h-61zM366 0h61v61h-61zM427 0h61v61h-61zM488 0h61v61h-61zM549 0h61v61h-61zM610 0h61v61h-61zM671 0h61v61h-61zM732 0h61v61h-61zM793 0h61v61h-61zM854 0h61v61h-61zM915 0h61v61h-61zM976 0h61v61h-61zM1037 0h61v61h-61zM1098 0h61v61h-61zM1159 0h61v61h-61zM1220 0h61v61h-61zM1281 0h61v61h-61zM1342 0h61v61h-61zM1403 0h61v61h-61zM1464 0h61v61h-61zM1525 0h61v61h-61zM1586 0h61v61h-61zM1647 0h61v61h-61zM1708 0h61v61h-61zM1769 0h61v61h-61zM1830 0h61v61h-61zM1891 0h61v61h-61zM1952 0h61v61h-61zM0 61h61v61H0zM61 61h61v61H61zM122 61h61v61h-61zM183 61h61v61h-61zM244 61h61v61h-61zM305 61h61v61h-61zM366 61h61v61h-61zM427 61h61v61h-61zM488 61h61v61h-61zM549 61h61v61h-61zM610 61h61v61h-61zM671 61h61v61h-61zM732 61h61v61h-61zM793 61h61v61h-61zM854 61h61v61h-61zM915 61h61v61h-61zM976 61h61v61h-61zM1037 61h61v61h-61zM1098 61h61v61h-61zM1159 61h61v61h-61zM1220 61h61v61h-61zM1281 61h61v61h-61zM1342 61h61v61h-61zM1403 61h61v61h-61zM1464 61h61v61h-61zM1525 61h61v61h-61zM1586 61h61v61h-61zM1647 61h61v61h-61zM1708 61h61v61h-61zM1769 61h61v61h-61zM1830 61h61v61h-61zM1891 61h61v61h-61zM1952 61h61v61h-61zM0 122h61v61H0zM61 122h61v61H61zM122 122h61v61h-61zM183 122h61v61h-61zM244 122h61v61h-61zM305 122h61v61h-61zM366 122h61v61h-61zM427 122h61v61h-61zM488 122h61v61h-61zM549 122h61v61h-61zM610 122h61v61h-61zM671 122h61v61h-61zM732 122h61v61h-61zM793 122h61v61h-61zM854 122h61v61h-61zM915 122h61v61h-61zM976 122h61v61h-61zM1037 122h61v61h-61zM1098 122h61v61h-61zM1159 122h61v61h-61zM1220 122h61v61h-61zM1281 122h61v61h-61zM1342 122h61v61h-61zM1403 122h61v61h-61zM1464 122h61v61h-61zM1525 122h61v61h-61zM1586 122h61v61h-61zM1647 122h61v61h-61zM1708 122h61v61h-61zM1769 122h61v61h-61zM1830 122h61v61h-61zM1891 122h61v61h-61zM1952 122h61v61h-61zM0 183h61v61H0zM61 183h61v61H61zM122 183h61v61h-61zM183 183h61v61h-61zM244 183h61v61h-61zM305 183h61v61h-61zM366 183h61v61h-61zM427 183h61v61h-61zM488 183h61v61h-61zM549 183h61v61h-61zM610 183h61v61h-61zM671 183h61v61h-61zM732 183h61v61h-61zM793 183h61v61h-61zM854 183h61v61h-61zM915 183h61v61h-61zM976 183h61v61h-61zM1037 183h61v61h-61zM1098 183h61v61h-61zM1159 183h61v61h-61zM1220 183h61v61h-61zM1281 183h61v61h-61zM1342 183h61v61h-61zM1403 183h61v61h-61zM1464 183h61v61h-61zM1525 183h61v61h-61zM1586 183h61v61h-61zM1647 183h61v61h-61zM1708 183h61v61h-61zM1769 183h61v61h-61zM1830 183h61v61h-61zM1891 183h61v61h-61zM1952 183h61v61h-61zM0 244h61v61H0zM61 244h61v61H61zM122 244h61v61h-61zM183 244h61v61h-61zM244 244h61v61h-61zM305 244h61v61h-61zM366 244h61v61h-61zM427 244h61v61h-61zM488 244h61v61h-61zM549 244h61v61h-61zM610 244h61v61h-61zM671 244h61v61h-61zM732 244h61v61h-61zM793 244h61v61h-61zM854 244h61v61h-61zM915 244h61v61h-61zM976 244h61v61h-61zM1037 244h61v61h-61zM1098 244h61v61h-61zM1159 244h61v61h-61zM1220 244h61v61h-61zM1281 244h61v61h-61zM1342 244h61v61h-61zM1403 244h61v61h-61zM1464 244h61v61h-61zM1525 244h61v61h-61zM1586 244h61v61h-61zM1647 244h61v61h-61zM1708 244h61v61h-61zM1769 244h61v61h-61zM1830 244h61v61h-61zM1891 244h61v61h-61zM1952 244h61v61h-61zM0 305h61v61H0zM61 305h61v61H61zM122 305h61v61h-61zM183 305h61v61h-61zM244 305h61v61h-61zM305 305h61v61h-61zM366 305h61v61h-61zM427 305h61v61h-61zM488 305h61v61h-61zM549 305h61v61h-61zM610 305h61v61h-61zM671 305h61v61h-61zM732 305h61v61h-61zM793 305h61v61h-61zM854 305h61v61h-61zM915 305h61v61h-61zM976 305h61v61h-61zM1037 305h61v61h-61zM1098 305h61v61h-61zM1159 305h61v61h-61zM1220 305h61v61h-61zM1281 305h61v61h-61zM1342 305h61v61h-61zM1403 305h61v61h-61zM1464 305h61v61h-61zM1525 305h61v61h-61zM1586 305h61v61h-61zM1647 305h61v61h-61zM1708 305h61v61h-61zM1769 305h61v61h-61zM1830 305h61v61h-61zM1891 305h61v61h-61zM1952 305h61v61h-61zM0 366h61v61H0zM61 366h61v61H61zM122 366h61v61h-61zM183 366h61v61h-61zM244 366h61v61h-61zM305 366h61v61h-61zM366 366h61v61h-61zM427 366h61v61h-61zM488 366h61v61h-61zM549 366h61v61h-61zM610 366h61v61h-61zM671 366h61v61h-61zM732 366h61v61h-61zM793 366h61v61h-61zM854 366h61v61h-61zM915 366h61v61h-61zM976 366h61v61h-61zM1037 366h61v61h-61zM1098 366h61v61h-61zM1159 366h61v61h-61zM1220 366h61v61h-61zM1281 366h61v61h-61zM1342 366h61v61h-61zM1403 366h61v61h-61zM1464 366h61v61h-61zM1525 366h61v61h-61zM1586 366h61v61h-61zM1647 366h61v61h-61zM1708 366h61v61h-61zM1769 366h61v61h-61zM1830 366h61v61h-61zM1891 366h61v61h-61zM1952 366h61v61h-61zM0 427h61v61H0zM61 427h61v61H61zM122 427h61v61h-61zM183 427h61v61h-61zM244 427h61v61h-61zM305 427h61v61h-61zM366 427h61v61h-61zM427 427h61v61h-61zM488 427h61v61h-61zM549 427h61v61h-61zM610 427h61v61h-61zM671 427h61v61h-61zM732 427h61v61h-61zM793 427h61v61h-61zM854 427h61v61h-61zM915 427h61v61h-61zM976 427h61v61h-61zM1037 427h61v61h-61zM1098 427h61v61h-61zM1159 427h61v61h-61zM1220 427h61v61h-61zM1281 427h61v61h-61zM1342 427h61v61h-61zM1403 427h61v61h-61zM1464 427h61v61h-61zM1525 427h61v61h-61zM1586 427h61v61h-61zM1647 427h61v61h-61zM1708 427h61v61h-61zM1769 427h61v61h-61zM1830 427h61v61h-61zM1891 427h61v61h-61zM1952 427h61v61h-61zM0 488h61v61H0zM61 488h61v61H61zM122 488h61v61h-61zM183 488h61v61h-61zM244 488h61v61h-61zM305 488h61v61h-61zM366 488h61v61h-61zM427 488h61v61h-61zM488 488h61v61h-61zM549 488h61v61h-61zM610 488h61v61h-61zM671 488h61v61h-61zM732 488h61v61h-61zM793 488h61v61h-61zM854 488h61v61h-61zM915 488h61v61h-61zM976 488h61v61h-61zM1037 488h61v61h-61zM1098 488h61v61h-61zM1159 488h61v61h-61zM1220 488h61v61h-61zM1281 488h61v61h-61zM1342 488h61v61h-61zM1403 488h61v61h-61zM1464 488h61v61h-61zM1525 488h61v61h-61zM1586 488h61v61h-61zM1647 488h61v61h-61zM1708 488h61v61h-61zM1769 488h61v61h-61zM1830 488h61v61h-61zM1891 488h61v61h-61zM1952 488h61v61h-61zM0 549h61v61H0zM61 549h61v61H61zM122 549h61v61h-61zM183 549h61v61h-61zM244 549h61v61h-61zM305 549h61v61h-61zM366 549h61v61h-61zM427 549h61v61h-61zM488 549h61v61h-61zM549 549h61v61h-61zM610 549h61v61h-61zM671 549h61v61h-61zM732 549h61v61h-61zM793 549h61v61h-61zM854 549h61v61h-61zM915 549h61v61h-61zM976 549h61v61h-61zM1037 549h61v61h-61zM1098 549h61v61h-61zM1159 549h61v61h-61zM1220 549h61v61h-61zM1281 549h61v61h-61zM1342 549h61v61h-61zM1403 549h61v61h-61zM1464 549h61v61h-61zM1525 549h61v61h-61zM1586 549h61v61h-61zM1647 549h61v61h-61zM1708 549h61v61h-61zM1769 549h61v61h-61zM1830 549h61v61h-61zM1891 549h61v61h-61zM1952 549h61v61h-61zM0 610h61v61H0zM61 610h61v61H61zM122 610h61v61h-61zM183 610h61v61h-61zM244 610h61v61h-61zM305 610h61v61h-61zM366 610h61v61h-61zM427 610h61v61h-61zM488 610h61v61h-61zM549 610h61v61h-61zM610 610h61v61h-61zM671 610h61v61h-61zM732 610h61v61h-61zM793 610h61v61h-61zM854 610h61v61h-61zM915 610h61v61h-61zM976 610h61v61h-61zM1037 610h61v61h-61zM1098 610h61v61h-61zM1159 610h61v61h-61zM1220 610h61v61h-61zM1281 610h61v61h-61zM1342 610h61v61h-61zM1403 610h61v61h-61zM1464 610h61v61h-61zM1525 610h61v61h-61zM1586 610h61v61h-61zM1647 610h61v61h-61zM1708 610h61v61h-61zM1769 610h61v61h-61zM1830 610h61v61h-61zM1891 610h61v61h-61zM1952 610h61v61h-61zM0 671h61v61H0zM61 671h61v61H61zM122 671h61v61h-61zM183 671h61v61h-61zM244 671h61v61h-61zM305 671h61v61h-61zM366 671h61v61h-61zM427 671h61v61h-61zM488 671h61v61h-61zM549 671h61v61h-61zM610 671h61v61h-61zM671 671h61v61h-61zM732 671h61v61h-61zM793 671h61v61h-61zM854 671h61v61h-61zM915 671h61v61h-61zM976 671h61v61h-61zM1037 671h61v61h-61zM1098 671h61v61h-61zM1159 671h61v61h-61zM1220 671h61v61h-61zM1281 671h61v61h-61zM1342 671h61v61h-61zM1403 671h61v61h-61zM1464 671h61v61h-61zM1525 671h61v61h-61zM1586 671h61v61h-61zM1647 671h61v61h-61zM1708 671h61v61h-61zM1769 671h61v61h-61zM1830 671h61v61h-61zM1891 671h61v61h-61zM1952 671h61v61h-61zM0 732h61v61H0zM61 732h61v61H61zM122 732h61v61h-61zM183 732h61v61h-61zM244 732h61v61h-61zM305 732h61v61h-61zM366 732h61v61h-61zM427 732h61v61h-61zM488 732h61v61h-61zM549 732h61v61h-61zM610 732h61v61h-61zM671 732h61v61h-61zM732 732h61v61h-61zM793 732h61v61h-61zM854 732h61v61h-61zM915 732h61v61h-61zM976 732h61v61h-61zM1037 732h61v61h-61zM1098 732h61v61h-61zM1159 732h61v61h-61zM1220 732h61v61h-61zM1281 732h61v61h-61zM1342 732h61v61h-61zM1403 732h61v61h-61zM1464 732h61v61h-61zM1525 732h61v61h-61zM1586 732h61v61h-61zM1647 732h61v61h-61zM1708 732h61v61h-61zM1769 732h61v61h-61zM1830 732h61v61h-61zM1891 732h61v61h-61zM1952 732h61v61h-61zM0 793h61v61H0zM61 793h61v61H61zM122 793h61v61h-61zM183 793h61v61h-61zM244 793h61v61h-61zM305 793h61v61h-61zM366 793h61v61h-61zM427 793h61v61h-61zM488 793h61v61h-61zM549 793h61v61h-61zM610 793h61v61h-61zM671 793h61v61h-61zM732 793h61v61h-61zM793 793h61v61h-61zM854 793h61v61h-61zM915 793h61v61h-61zM976 793h61v61h-61zM1037 793h61v61h-61zM1098 793h61v61h-61zM1159 793h61v61h-61zM1220 793h61v61h-61zM1281 793h61v61h-61zM1342 793h61v61h-61zM1403 793h61v61h-61zM1464 793h61v61h-61zM1525 793h61v61h-61zM1586 793h61v61h-61zM1647 793h61v61h-61zM1708 793h61v61h-61zM1769 793h61v61h-61zM1830 793h61v61h-61zM1891 793h61v61h-61zM1952 793h61v61h-61zM0 854h61v61H0zM61 854h61v61H61zM122 854h61v61h-61zM183 854h61v61h-61zM244 854h61v61h-61zM305 854h61v61h-61zM366 854h61v61h-61zM427 854h61v61h-61zM488 854h61v61h-61zM549 854h61v61h-61zM610 854h61v61h-61zM671 854h61v61h-61zM732 854h61v61h-61zM793 854h61v61h-61zM854 854h61v61h-61zM915 854h61v61h-61zM976 854h61v61h-61zM1037 854h61v61h-61zM1098 854h61v61h-61zM1159 854h61v61h-61zM1220 854h61v61h-61zM1281 854h61v61h-61zM1342 854h61v61h-61zM1403 854h61v61h-61zM1464 854h61v61h-61zM1525 854h61v61h-61zM1586 854h61v61h-61zM1647 854h61v61h-61zM1708 854h61v61h-61zM1769 854h61v61h-61zM1830 854h61v61h-61zM1891 854h61v61h-61zM1952 854h61v61h-61zM0 915h61v61H0zM61 915h61v61H61zM122 915h61v61h-61zM183 915h61v61h-61zM244 915h61v61h-61zM305 915h61v61h-61zM366 915h61v61h-61zM427 915h61v61h-61zM488 915h61v61h-61zM549 915h61v61h-61zM610 915h61v61h-61zM671 915h61v61h-61zM732 915h61v61h-61zM793 915h61v61h-61zM854 915h61v61h-61zM915 915h61v61h-61zM976 915h61v61h-61zM1037 915h61v61h-61zM1098 915h61v61h-61zM1159 915h61v61h-61zM1220 915h61v61h-61zM1281 915h61v61h-61zM1342 915h61v61h-61zM1403 915h61v61h-61zM1464 915h61v61h-61zM1525 915h61v61h-61zM1586 915h61v61h-61zM1647 915h61v61h-61zM1708 915h61v61h-61zM1769 915h61v61h-61zM1830 915h61v61h-61zM1891 915h61v61h-61zM1952 915h61v61h-61zM0 976h61v61H0zM61 976h61v61H61zM122 976h61v61h-61zM183 976h61v61h-61zM244 976h61v61h-61zM305 976h61v61h-61zM366 976h61v61h-61zM427 976h61v61h-61zM488 976h61v61h-61zM549 976h61v61h-61zM610 976h61v61h-61zM671 976h61v61h-61zM732 976h61v61h-61zM793 976h61v61h-61zM854 976h61v61h-61zM915 976h61v61h-61zM976 976h61v61h-61zM1037 976h61v61h-61zM1098 976h61v61h-61zM1159 976h61v61h-61zM1220 976h61v61h-61zM1281 976h61v61h-61zM1342 976h61v61h-61zM1403 976h61v61h-61zM1464 976h61v61h-61zM1525 976h61v61h-61zM1586 976h61v61h-61zM1647 976h61v61h-61zM1708 976h61v61h-61zM1769 976h61v61h-61zM1830 976h61v61h-61zM1891 976h61v61h-61zM1952 976h61v61h-61zM0 1037h61v61H0zM61 1037h61v61H61zM122 1037h61v61h-61zM183 1037h61v61h-61zM244 1037h61v61h-61zM305 1037h61v61h-61zM366 1037h61v61h-61zM427 1037h61v61h-61zM488 1037h61v61h-61zM549 1037h61v61h-61zM610 1037h61v61h-61zM671 1037h61v61h-61zM732 1037h61v61h-61zM793 1037h61v61h-61zM854 1037h61v61h-61zM915 1037h61v61h-61zM976 1037h61v61h-61zM1037 1037h61v61h-61zM1098 1037h61v61h-61zM1159 1037h61v61h-61zM1220 1037h61v61h-61zM1281 1037h61v61h-61zM1342 1037h61v61h-61zM1403 1037h61v61h-61zM1464 1037h61v61h-61zM1525 1037h61v61h-61zM1586 1037h61v61h-61zM1647 1037h61v61h-61zM1708 1037h61v61h-61zM1769 1037h61v61h-61zM1830 1037h61v61h-61zM1891 1037h61v61h-61zM1952 1037h61v61h-61zM0 1098h61v61H0zM61 1098h61v61H61zM122 1098h61v61h-61zM183 1098h61v61h-61zM244 1098h61v61h-61zM305 1098h61v61h-61zM366 1098h61v61h-61zM427 1098h61v61h-61zM488 1098h61v61h-61zM549 1098h61v61h-61zM610 1098h61v61h-61zM671 1098h61v61h-61zM732 1098h61v61h-61zM793 1098h61v61h-61zM854 1098h61v61h-61zM915 1098h61v61h-61zM976 1098h61v61h-61zM1037 1098h61v61h-61zM1098 1098h61v61h-61zM1159 1098h61v61h-61zM1220 1098h61v61h-61zM1281 1098h61v61h-61zM1342 1098h61v61h-61zM1403 1098h61v61h-61zM1464 1098h61v61h-61zM1525 1098h61v61h-61zM1586 1098h61v61h-61zM1647 1098h61v61h-61zM1708 1098h61v61h-61zM1769 1098h61v61h-61zM1830 1098h61v61h-61zM1891 1098h61v61h-61zM1952 1098h61v61h-61zM0 1159h61v61H0zM61 1159h61v61H61zM122 1159h61v61h-61zM183 1159h61v61h-61zM244 1159h61v61h-61zM305 1159h61v61h-61zM366 1159h61v61h-61zM427 1159h61v61h-61zM488 1159h61v61h-61zM549 1159h61v61h-61zM610 1159h61v61h-61zM671 1159h61v61h-61zM732 1159h61v61h-61zM793 1159h61v61h-61zM854 1159h61v61h-61zM915 1159h61v61h-61zM976 1159h61v61h-61zM1037 1159h61v61h-61zM1098 1159h61v61h-61zM1159 1159h61v61h-61zM1220 1159h61v61h-61zM1281 1159h61v61h-61zM1342 1159h61v61h-61zM1403 1159h61v61h-61zM1464 1159h61v61h-61zM1525 1159h61v61h-61zM1586 1159h61v61h-61zM1647 1159h61v61h-61zM1708 1159h61v61h-61zM1769 1159h61v61h-61zM1830 1159h61v61h-61zM1891 1159h61v61h-61zM1952 1159h61v61h-61zM0 1220h61v61H0zM61 1220h61v61H61zM122 1220h61v61h-61zM183 1220h61v61h-61zM244 1220h61v61h-61zM305 1220h61v61h-61zM366 1220h61v61h-61zM427 1220h61v61h-61zM488 1220h61v61h-61zM549 1220h61v61h-61zM610 1220h61v61h-61zM671 1220h61v61h-61zM732 1220h61v61h-61zM793 1220h61v61h-61zM854 1220h61v61h-61zM915 1220h61v61h-61zM976 1220h61v61h-61zM1037 1220h61v61h-61zM1098 1220h61v61h-61zM1159 1220h61v61h-61zM1220 1220h61v61h-61zM1281 1220h61v61h-61zM1342 1220h61v61h-61zM1403 1220h61v61h-61zM1464 1220h61v61h-61zM1525 1220h61v61h-61zM1586 1220h61v61h-61zM1647 1220h61v61h-61zM1708 1220h61v61h-61zM1769 1220h61v61h-61zM1830 1220h61v61h-61zM1891 1220h61v61h-61zM1952 1220h61v61h-61zM0 1281h61v61H0zM61 1281h61v61H61zM122 1281h61v61h-61zM183 1281h61v61h-61zM244 1281h61v61h-61zM305 1281h61v61h-61zM366 1281h61v61h-61zM427 1281h61v61h-61zM488 1281h61v61h-61zM549 1281h61v61h-61zM610 1281h61v61h-61zM671 1281h61v61h-61zM732 1281h61v61h-61zM793 1281h61v61h-61zM854 1281h61v61h-61zM915 1281h61v61h-61zM976 1281h61v61h-61zM1037 1281h61v61h-61zM1098 1281h61v61h-61zM1159 1281h61v61h-61zM1220 1281h61v61h-61zM1281 1281h61v61h-61zM1342 1281h61v61h-61zM1403 1281h61v61h-61zM1464 1281h61v61h-61zM1525 1281h61v61h-61zM1586 1281h61v61h-61zM1647 1281h61v61h-61zM1708 1281h61v61h-61zM1769 1281h61v61h-61zM1830 1281h61v61h-61zM1891 1281h61v61h-61zM1952 1281h61v61h-61zM0 1342h61v61H0zM61 1342h61v61H61zM122 1342h61v61h-61zM183 1342h61v61h-61zM244 1342h61v61h-61zM305 1342h61v61h-61zM366 1342h61v61h-61zM427 1342h61v61h-61zM488 1342h61v61h-61zM549 1342h61v61h-61zM610 1342h61v61h-61zM671 1342h61v61h-61zM732 1342h61v61h-61zM793 1342h61v61h-61zM854 1342h61v61h-61zM915 1342h61v61h-61zM976 1342h61v61h-61zM1037 1342h61v61h-61zM1098 1342h61v61h-61zM1159 1342h61v61h-61zM1220 1342h61v61h-61zM1281 1342h61v61h-61zM1342 1342h61v61h-61zM1403 1342h61v61h-61zM1464 1342h61v61h-61zM1525 1342h61v61h-61zM1586 1342h61v61h-61zM1647 1342h61v61h-61zM1708 1342h61v61h-61zM1769 1342h61v61h-61zM1830 1342h61v61h-61zM1891 1342h61v61h-61zM1952 1342h61v61h-61z%22%2F%3E%3C%2Fg%3E%3Cdefs%3E%3CradialGradient id=%22a%22%3E%3Cstop offset=%220%22 stop-color=%22%23fff%22%2F%3E%3Cstop offset=%221%22 stop-color=%22%23fff%22 stop-opacity=%220%22%2F%3E%3C%2FradialGradient%3E%3C%2Fdefs%3E%3C%2Fsvg%3E\")"
            },
            colors: {
                primary: {
                    600: "#a594fd"
                }
            }
        }
    },
    plugins: []
}
export default config