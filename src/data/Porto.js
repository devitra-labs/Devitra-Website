export const portoData = [
    {
        id: 1,
        title: "DevitOS Dashboard",
        slug: "devitos-dashboard",
        description:
            "Platform monitoring internal berbasis web untuk memantau performa server, log aktivitas, dan metrik sistem secara real-time.",
        longDescription:
            "Dibangun menggunakan React dan Node.js, dashboard ini memungkinkan tim Devitra untuk memantau seluruh infrastruktur dari satu tempat.",
        category: "Web App",
        tags: ["React", "Node.js", "WebSocket", "TailwindCSS"],
        image: "/images/porto/devitos-dashboard.jpg",
        year: "2024",
        status: "Live",
        url: "https://devitra.dev/projects/devitos-dashboard",
        featured: true,
    },
    {
        id: 2,
        title: "Kasir Pintar",
        slug: "kasir-pintar",
        description:
            "Aplikasi kasir berbasis PWA untuk UMKM, dilengkapi manajemen stok, laporan penjualan, dan mode offline-first.",
        longDescription:
            "Kasir Pintar dirancang agar bisa berjalan di perangkat low-end sekalipun, tanpa ketergantungan koneksi internet.",
        category: "Mobile / PWA",
        tags: ["Vue.js", "IndexedDB", "PWA", "Firebase"],
        image: "/images/porto/kasir-pintar.jpg",
        year: "2024",
        status: "Live",
        url: "https://devitra.dev/projects/kasir-pintar",
        featured: true,
    },
    {
        id: 3,
        title: "EduTrack LMS",
        slug: "edutrack-lms",
        description:
            "Learning Management System untuk lembaga kursus dengan fitur kelas online, kuis interaktif, dan sertifikat otomatis.",
        longDescription:
            "EduTrack membantu instruktur membuat konten kursus, memantau progres siswa, dan menerbitkan sertifikat secara otomatis.",
        category: "Web App",
        tags: ["Next.js", "PostgreSQL", "Prisma", "Cloudinary"],
        image: "/images/porto/edutrack-lms.jpg",
        year: "2023",
        status: "Live",
        url: "https://devitra.dev/projects/edutrack-lms",
        featured: true,
    },
    {
        id: 4,
        title: "Antrian Digital",
        slug: "antrian-digital",
        description:
            "Sistem manajemen antrian digital untuk klinik dan puskesmas, dengan notifikasi SMS dan display publik real-time.",
        longDescription:
            "Antrian Digital mengurangi kerumunan fisik di lobi layanan kesehatan dengan sistem nomor antrian berbasis QR Code.",
        category: "System",
        tags: ["Laravel", "MySQL", "Websocket", "Twilio"],
        image: "/images/porto/antrian-digital.jpg",
        year: "2023",
        status: "Live",
        url: "https://devitra.dev/projects/antrian-digital",
        featured: false,
    },
    {
        id: 5,
        title: "Portofolio Generator",
        slug: "portofolio-generator",
        description:
            "Tool open-source untuk membuat halaman portofolio personal dalam hitungan menit tanpa perlu coding.",
        longDescription:
            "Pengguna cukup mengisi form, memilih template, lalu mendapatkan halaman portofolio siap deploy ke Vercel atau Netlify.",
        category: "Open Source",
        tags: ["React", "Vercel", "Markdown", "GitHub API"],
        image: "/images/porto/porto-generator.jpg",
        year: "2023",
        status: "Open Source",
        url: "https://github.com/devitra/portofolio-generator",
        featured: false,
    },
    {
        id: 6,
        title: "AgriSense IoT",
        slug: "agrisense-iot",
        description:
            "Platform IoT untuk pertanian cerdas — memantau kelembaban tanah, suhu, dan curah hujan dari sensor lapangan.",
        longDescription:
            "Data dari sensor dikirim via MQTT ke server, divisualisasikan dalam dashboard, dan memicu notifikasi otomatis ke petani.",
        category: "IoT",
        tags: ["Python", "MQTT", "InfluxDB", "Grafana"],
        image: "/images/porto/agrisense.jpg",
        year: "2022",
        status: "Completed",
        url: "https://devitra.dev/projects/agrisense-iot",
        featured: false,
    },
];

export const categoryList = ["Semua", "Web App", "Mobile / PWA", "System", "Open Source", "IoT"];

export const statsData = [
    { value: "50+", label: "Proyek Selesai" },
    { value: "3+", label: "Tahun Pengalaman" },
    { value: "20+", label: "Klien Puas" },
    { value: "8", label: "Penghargaan" },
];