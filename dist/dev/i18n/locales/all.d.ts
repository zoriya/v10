//#region src/core/i18n/locales/all.d.ts
/** Every built-in locale pack keyed by BCP 47 tag. */
declare const all: {
  readonly en: {
    readonly buttons: {
      readonly play: 'Play';
      readonly pause: 'Pause';
      readonly replay: 'Replay';
      readonly mute: 'Mute';
      readonly unmute: 'Unmute';
    };
    readonly seek: {
      readonly forward: 'Seek forward {seconds} seconds';
      readonly backward: 'Seek backward {seconds} seconds';
    };
    readonly fullscreen: {
      readonly enter: 'Enter fullscreen';
      readonly exit: 'Exit fullscreen';
    };
    readonly captions: {
      readonly enable: 'Enable captions';
      readonly disable: 'Disable captions';
    };
    readonly pip: {
      readonly enter: 'Enter picture-in-picture';
      readonly exit: 'Exit picture-in-picture';
    };
    readonly live: {
      readonly playing: 'Playing live';
      readonly seekToEdge: 'Seek to live edge';
      readonly badge: 'Live';
    };
    readonly cast: {
      readonly start: 'Start casting';
      readonly stop: 'Stop casting';
      readonly connecting: 'Connecting';
    };
    readonly airplay: {
      readonly start: 'Start AirPlay';
      readonly stop: 'Stop AirPlay';
    };
    readonly slider: {
      readonly seek: 'Seek';
    };
    readonly time: {
      readonly current: 'Current time';
      readonly duration: 'Duration';
      readonly remaining: 'Remaining';
      readonly remainingSuffix: '{duration} remaining';
      readonly showElapsed: '{duration}. Show elapsed time.';
      readonly showDuration: '{duration}. Show duration.';
      readonly showRemaining: '{duration}. Show remaining time.';
      readonly position: '{current} of {duration}';
    };
    readonly playback: {
      readonly rate: 'Playback rate {rate}';
    };
    readonly volume: {
      readonly mutedValue: '{percent}, muted';
      readonly muted: 'Muted';
      readonly label: 'Volume';
      readonly value: 'Volume {value}';
    };
    readonly status: {
      readonly captionsOn: 'Captions on';
      readonly captionsOff: 'Captions off';
      readonly paused: 'Paused';
      readonly playing: 'Playing';
      readonly fullscreen: 'Fullscreen';
      readonly pip: 'Picture in picture';
      readonly exitPip: 'Exit picture in picture';
      readonly seekedTo: 'Seeked to {time}';
    };
    readonly container: {
      readonly label: 'Media player';
    };
    readonly errors: {
      readonly aborted: 'You stopped media playback before it finished.';
      readonly network: 'This media could not be loaded due to a network or server issue.';
      readonly decode: 'This media could not be played. It may be corrupted, or your browser may not support its format.';
      readonly source: 'This media could not be loaded. It may be unavailable, or your browser may not support its format.';
      readonly encrypted: 'This media could not be played because it could not be decrypted.';
      readonly title: 'Something went wrong.';
      readonly unexpected: 'An unexpected error occurred.';
    };
    readonly common: {
      readonly empty: '';
      readonly ok: 'OK';
    };
    readonly menu: {
      readonly settings: 'Settings';
      readonly quality: 'Quality';
      readonly audio: 'Audio';
      readonly default: 'Default';
      readonly speed: 'Speed';
      readonly captions: 'Captions';
      readonly playbackRate: 'Playback rate';
      readonly back: 'Back';
      readonly off: 'Off';
      readonly auto: 'Auto';
      readonly autoWithLabel: 'Auto ({label})';
      readonly subtitles: 'Subtitles';
    };
  };
  readonly ar: {
    readonly buttons: {
      readonly play: 'تشغيل';
      readonly pause: 'إيقاف';
      readonly replay: 'إعادة التشغيل';
      readonly mute: 'كتم';
      readonly unmute: 'إلغاء الكتم';
    };
    readonly seek: {
      readonly forward: 'التخطي للأمام {seconds}';
      readonly backward: 'الرجوع للخلف {seconds}';
    };
    readonly fullscreen: {
      readonly enter: 'ملء الشاشة';
      readonly exit: 'الخروج من ملء الشاشة';
    };
    readonly captions: {
      readonly enable: 'تفعيل التسميات التوضيحية';
      readonly disable: 'إيقاف التسميات التوضيحية';
    };
    readonly pip: {
      readonly enter: 'صورة داخل صورة';
      readonly exit: 'الخروج من وضع صورة داخل صورة';
    };
    readonly live: {
      readonly playing: 'بث مباشر';
      readonly seekToEdge: 'الانتقال إلى البث المباشر';
      readonly badge: 'مباشر';
    };
    readonly cast: {
      readonly start: 'بدء الإرسال';
      readonly stop: 'إيقاف الإرسال';
      readonly connecting: 'جارٍ الاتصال';
    };
    readonly airplay: {
      readonly start: 'بدء AirPlay';
      readonly stop: 'إيقاف AirPlay';
    };
    readonly slider: {
      readonly seek: 'تقديم';
    };
    readonly time: {
      readonly current: 'الوقت الحالي';
      readonly duration: 'المدة';
      readonly remaining: 'الوقت المتبقي';
      readonly remainingSuffix: 'متبقٍ {duration}';
      readonly showElapsed: '{duration}. عرض الوقت المنقضي.';
      readonly showDuration: '{duration}. عرض المدة.';
      readonly showRemaining: '{duration}. عرض الوقت المتبقي.';
      readonly position: '{current} من {duration}';
    };
    readonly playback: {
      readonly rate: 'سرعة التشغيل {rate}';
    };
    readonly volume: {
      readonly mutedValue: '{percent}، مكتوم';
      readonly muted: 'صامت';
      readonly label: 'مستوى الصوت';
      readonly value: 'مستوى الصوت {value}';
    };
    readonly status: {
      readonly captionsOn: 'الترجمة مفعّلة';
      readonly captionsOff: 'الترجمة متوقفة';
      readonly paused: 'متوقف مؤقتاً';
      readonly playing: 'قيد التشغيل';
      readonly fullscreen: 'ملء الشاشة';
      readonly pip: 'صورة داخل صورة';
      readonly exitPip: 'الخروج من صورة داخل صورة';
      readonly seekedTo: 'تم الانتقال إلى {time}';
    };
    readonly container: {
      readonly label: 'مشغل الوسائط';
    };
    readonly errors: {
      readonly aborted: 'لقد ألغيت تشغيل الفيديو';
      readonly network: 'تسبب خطأ في الشبكة بفشل تحميل الفيديو بالكامل.';
      readonly decode: 'تم إيقاف تشغيل الفيديو بسبب عدم صلاحية الفيديو أو لأن الفيديو المستخدم يستخدم ميزات غير مدعومة من متصفحك.';
      readonly source: 'لا يمكن تحميل الفيديو بسبب فشل في الخادم أو الشبكة ، أو بسبب عدم إمكانية قراءة تنسيق الفيديو.';
      readonly encrypted: 'الوسائط مشفرة وليس لدينا الرموز اللازمة لفك شفرتها.';
      readonly title: 'حدث خطأ ما.';
      readonly unexpected: 'حدث خطأ. يُرجى المحاولة مرة أخرى.';
    };
    readonly common: {
      readonly empty: '';
      readonly ok: 'أغلق';
    };
    readonly menu: {
      readonly settings: 'الإعدادات';
      readonly quality: 'الجودة';
      readonly audio: 'الصوت';
      readonly default: 'افتراضي';
      readonly speed: 'السرعة';
      readonly captions: 'التسميات التوضيحية';
      readonly playbackRate: 'سرعة التشغيل';
      readonly back: 'رجوع';
      readonly off: 'إيقاف';
      readonly auto: 'تلقائي';
      readonly autoWithLabel: 'تلقائي ({label})';
      readonly subtitles: 'الترجمة';
    };
  };
  readonly az: {
    readonly buttons: {
      readonly play: 'Oynat';
      readonly pause: 'Pauza';
      readonly replay: 'Yenidən oynat';
      readonly mute: 'Səssizi qoş';
      readonly unmute: 'Səssizi söndür';
    };
    readonly seek: {
      readonly forward: '{seconds} saniyə qabağa keçin';
      readonly backward: '{seconds} saniyə geriyə keçin';
    };
    readonly fullscreen: {
      readonly enter: 'Tam ekran';
      readonly exit: 'Tam ekrandan çıx';
    };
    readonly captions: {
      readonly enable: 'Altyazıları aktiv et';
      readonly disable: 'Altyazıları söndür';
    };
    readonly pip: {
      readonly enter: 'Şəkil içində şəkil rejimi';
      readonly exit: 'Şəkil içində şəkil rejimindən çıxın';
    };
    readonly live: {
      readonly playing: 'Canlı yayımda';
      readonly seekToEdge: 'Canlı yayıma keç';
      readonly badge: 'Canlı';
    };
    readonly cast: {
      readonly start: 'Yayımı başlat';
      readonly stop: 'Yayımı durdur';
      readonly connecting: 'Qoşulur';
    };
    readonly airplay: {
      readonly start: 'AirPlay-i başlat';
      readonly stop: 'AirPlay-i dayandır';
    };
    readonly slider: {
      readonly seek: 'Sürüşdür';
    };
    readonly time: {
      readonly current: 'Cari Vaxt';
      readonly duration: 'Müddət';
      readonly remaining: 'Qalan vaxt';
      readonly remainingSuffix: 'Qalan {duration}';
      readonly showElapsed: '{duration}. Keçən vaxtı göstər.';
      readonly showDuration: '{duration}. Müddəti göstər.';
      readonly showRemaining: '{duration}. Qalan vaxtı göstər.';
      readonly position: '{current} / {duration}';
    };
    readonly playback: {
      readonly rate: 'Oynatma sürəti {rate}';
    };
    readonly volume: {
      readonly mutedValue: '{percent}, səssiz';
      readonly muted: 'Səssiz';
      readonly label: 'Səs';
      readonly value: 'Səs {value}';
    };
    readonly status: {
      readonly captionsOn: 'Başlıqlar aktiv';
      readonly captionsOff: 'Başlıqlar söndürülüb';
      readonly paused: 'Dayandırılıb';
      readonly playing: 'Oynadılır';
      readonly fullscreen: 'Tam ekran';
      readonly pip: 'Şəkil içində şəkil';
      readonly exitPip: 'Şəkil içində şəkildən çıxın';
      readonly seekedTo: '{time} vaxtına keçildi';
    };
    readonly container: {
      readonly label: 'Media pleyeri';
    };
    readonly errors: {
      readonly aborted: 'Siz medianın oxudulmasını dayandırdınız';
      readonly network: 'Şəbəkə xətası səbəbindən medianın endirilməsi yarıda qaldı.';
      readonly decode: 'Media faylının korlanması səbəbilə və ya media faylın brauzerinizin dəstəkləmədiyi funksiyalardan istifadə etdiyinə görə medianın oxudulması dayandırılıb.';
      readonly source: 'Yükləmə xətası.';
      readonly encrypted: 'Media faylı şifrələnib və onun şifrəsini açmaq üçün açarlar yoxdur.';
      readonly title: 'Bir şey yanlış getdi.';
      readonly unexpected: 'Xəta baş verdi. Yenidən cəhd edin.';
    };
    readonly common: {
      readonly empty: '';
      readonly ok: 'Bağla';
    };
    readonly menu: {
      readonly settings: 'Parametrlər';
      readonly quality: 'Keyfiyyət';
      readonly audio: 'Səs';
      readonly default: 'Defolt';
      readonly speed: 'Sürət';
      readonly captions: 'Başlıqlar';
      readonly playbackRate: 'Oynatma sürəti';
      readonly back: 'Geri';
      readonly off: 'Söndür';
      readonly auto: 'Avtomatik';
      readonly autoWithLabel: 'Avtomatik ({label})';
      readonly subtitles: 'Altyazılar';
    };
  };
  readonly bs: {
    readonly buttons: {
      readonly play: 'Pusti';
      readonly pause: 'Pauza';
      readonly replay: 'Ponovi';
      readonly mute: 'Prigušen';
      readonly unmute: 'Ne-prigušen';
    };
    readonly seek: {
      readonly forward: 'Premotaj naprijed {seconds} sekundi';
      readonly backward: 'Premotaj nazad {seconds} sekundi';
    };
    readonly fullscreen: {
      readonly enter: 'Puni ekran';
      readonly exit: 'Izlaz iz punog ekrana';
    };
    readonly captions: {
      readonly enable: 'Uključi titlove';
      readonly disable: 'Isključi titlove';
    };
    readonly pip: {
      readonly enter: 'Slika u slici';
      readonly exit: 'Izlaz iz slike u slici';
    };
    readonly live: {
      readonly playing: 'Reprodukcija uživo';
      readonly seekToEdge: 'Idi na live';
      readonly badge: 'Uživo';
    };
    readonly cast: {
      readonly start: 'Pokreni emitovanje';
      readonly stop: 'Zaustavi emitovanje';
      readonly connecting: 'Povezivanje';
    };
    readonly airplay: {
      readonly start: 'Pokreni AirPlay';
      readonly stop: 'Zaustavi AirPlay';
    };
    readonly slider: {
      readonly seek: 'Premotavanje';
    };
    readonly time: {
      readonly current: 'Trenutno vrijeme';
      readonly duration: 'Vrijeme trajanja';
      readonly remaining: 'Preostalo vrijeme';
      readonly remainingSuffix: 'Preostalo {duration}';
      readonly showElapsed: '{duration}. Prikaži proteklo vrijeme.';
      readonly showDuration: '{duration}. Prikaži trajanje.';
      readonly showRemaining: '{duration}. Prikaži preostalo vrijeme.';
      readonly position: '{current} od {duration}';
    };
    readonly playback: {
      readonly rate: 'Stopa reprodukcije {rate}';
    };
    readonly volume: {
      readonly mutedValue: '{percent}, isključen zvuk';
      readonly muted: 'Isključen zvuk';
      readonly label: 'Glasnoća';
      readonly value: 'Glasnoća {value}';
    };
    readonly status: {
      readonly captionsOn: 'Titlovi uključeni';
      readonly captionsOff: 'Titlovi isključeni';
      readonly paused: 'Pauzirano';
      readonly playing: 'Reprodukcija';
      readonly fullscreen: 'Puni ekran';
      readonly pip: 'Slika u slici';
      readonly exitPip: 'Izlaz iz slike u slici';
      readonly seekedTo: 'Premotano na {time}';
    };
    readonly container: {
      readonly label: 'Medijski plejer';
    };
    readonly errors: {
      readonly aborted: 'Isključili ste reprodukciju videa.';
      readonly network: 'Video se prestao preuzimati zbog greške na mreži.';
      readonly decode: 'Reprodukcija videa je zaustavljenja zbog greške u formatu ili zbog verzije vašeg pretraživača.';
      readonly source: 'Video se ne može reproducirati zbog servera, greške u mreži ili je format ne podržan.';
      readonly encrypted: 'Medij je šifriran i nema ključeva za dešifriranje.';
      readonly title: 'Nešto je pošlo po krivu.';
      readonly unexpected: 'Došlo je do greške. Pokušajte ponovo.';
    };
    readonly common: {
      readonly empty: '';
      readonly ok: 'OK';
    };
    readonly menu: {
      readonly settings: 'Postavke';
      readonly quality: 'Kvalitet';
      readonly audio: 'Zvuk';
      readonly default: 'Zadano';
      readonly speed: 'Brzina';
      readonly captions: 'Titlovi';
      readonly playbackRate: 'Brzina reprodukcije';
      readonly back: 'Nazad';
      readonly off: 'Isključeno';
      readonly auto: 'Automatski';
      readonly autoWithLabel: 'Automatski ({label})';
      readonly subtitles: 'Titlovi';
    };
  };
  readonly bg: {
    readonly buttons: {
      readonly play: 'Възпроизвеждане';
      readonly pause: 'Пауза';
      readonly replay: 'Повтори';
      readonly mute: 'Без звук';
      readonly unmute: 'Със звук';
    };
    readonly seek: {
      readonly forward: 'Превъртане напред с {seconds} секунди';
      readonly backward: 'Превъртане назад с {seconds} секунди';
    };
    readonly fullscreen: {
      readonly enter: 'Цял екран';
      readonly exit: 'Изход от цял екран';
    };
    readonly captions: {
      readonly enable: 'Включи субтитри';
      readonly disable: 'Изключи субтитри';
    };
    readonly pip: {
      readonly enter: 'Картина в картина';
      readonly exit: 'Изход от картина в картина';
    };
    readonly live: {
      readonly playing: 'На живо';
      readonly seekToEdge: 'Към живото предаване';
      readonly badge: 'На живо';
    };
    readonly cast: {
      readonly start: 'Започни излъчване';
      readonly stop: 'Спри излъчването';
      readonly connecting: 'Свързване';
    };
    readonly airplay: {
      readonly start: 'Стартиране на AirPlay';
      readonly stop: 'Спиране на AirPlay';
    };
    readonly slider: {
      readonly seek: 'Превъртане';
    };
    readonly time: {
      readonly current: 'Текущо време';
      readonly duration: 'Продължителност';
      readonly remaining: 'Оставащо време';
      readonly remainingSuffix: 'Остават {duration}';
      readonly showElapsed: '{duration}. Показване на изминалото време.';
      readonly showDuration: '{duration}. Показване на продължителността.';
      readonly showRemaining: '{duration}. Показване на оставащото време.';
      readonly position: '{current} от {duration}';
    };
    readonly playback: {
      readonly rate: 'Скорост на възпроизвеждане {rate}';
    };
    readonly volume: {
      readonly mutedValue: '{percent}, без звук';
      readonly muted: 'Без звук';
      readonly label: 'Сила на звука';
      readonly value: 'Сила на звука {value}';
    };
    readonly status: {
      readonly captionsOn: 'Субтитри включени';
      readonly captionsOff: 'Субтитри изключени';
      readonly paused: 'На пауза';
      readonly playing: 'Възпроизвеждане';
      readonly fullscreen: 'Цял екран';
      readonly pip: 'Картина в картина';
      readonly exitPip: 'Изход от картина в картина';
      readonly seekedTo: 'Преместено на {time}';
    };
    readonly container: {
      readonly label: 'Медиен плейър';
    };
    readonly errors: {
      readonly aborted: 'Спряхте възпроизвеждането на видеото';
      readonly network: 'Грешка в мрежата провали изтеглянето на видеото.';
      readonly decode: 'Възпроизвеждането на видеото беше прекъснато заради проблем с файла или защото видеото използва опции които браузърът Ви не поддържа.';
      readonly source: 'Видеото не може да бъде заредено заради проблем със сървъра или мрежата или защото този формат не е поддържан.';
      readonly encrypted: 'Медията е шифрована и няма ключове за дешифриране.';
      readonly title: 'Нещо се обърка.';
      readonly unexpected: 'Възникна грешка. Моля, опитайте отново.';
    };
    readonly common: {
      readonly empty: '';
      readonly ok: 'OK';
    };
    readonly menu: {
      readonly settings: 'Настройки';
      readonly quality: 'Качество';
      readonly audio: 'Аудио';
      readonly default: 'По подразбиране';
      readonly speed: 'Скорост';
      readonly captions: 'Надписи';
      readonly playbackRate: 'Скорост на възпроизвеждане';
      readonly back: 'Назад';
      readonly off: 'Изкл.';
      readonly auto: 'Авто';
      readonly autoWithLabel: 'Авто ({label})';
      readonly subtitles: 'Субтитри';
    };
  };
  readonly bn: {
    readonly buttons: {
      readonly play: 'প্লে করুন';
      readonly pause: 'বিরাম';
      readonly replay: 'রিপ্লে করুন';
      readonly mute: 'মিউট';
      readonly unmute: 'আনমিউট';
    };
    readonly seek: {
      readonly forward: '{seconds} সেকেন্ড এগিয়ে যান';
      readonly backward: '{seconds} সেকেন্ড পিছিয়ে যান';
    };
    readonly fullscreen: {
      readonly enter: 'পূর্ণ স্ক্রীন';
      readonly exit: 'পূর্ণ স্ক্রীন থেকে বেরিয়ে আসুন';
    };
    readonly captions: {
      readonly enable: 'ক্যাপশন';
      readonly disable: 'ক্যাপশন বন্ধ করুন';
    };
    readonly pip: {
      readonly enter: 'পিকচার-ইন-পিকচার';
      readonly exit: 'পিকচার-ইন-পিকচার থেকে প্রস্থান করুন';
    };
    readonly live: {
      readonly playing: 'লাইভ চলছে';
      readonly seekToEdge: 'লাইভে যান';
      readonly badge: 'লাইভ';
    };
    readonly cast: {
      readonly start: 'কাস্টিং শুরু করুন';
      readonly stop: 'কাস্টিং বন্ধ করুন';
      readonly connecting: 'সংযুক্ত হচ্ছে';
    };
    readonly airplay: {
      readonly start: 'AirPlay শুরু করুন';
      readonly stop: 'AirPlay বন্ধ করুন';
    };
    readonly slider: {
      readonly seek: 'অনুসন্ধান';
    };
    readonly time: {
      readonly current: 'বর্তমান সময়';
      readonly duration: 'ব্যাপ্তিকাল';
      readonly remaining: 'অবশিষ্ট সময়';
      readonly remainingSuffix: 'বাকি {duration}';
      readonly showElapsed: '{duration}. অতিবাহিত সময় দেখান.';
      readonly showDuration: '{duration}. সময়কাল দেখান.';
      readonly showRemaining: '{duration}. বাকি সময় দেখান.';
      readonly position: '{duration} এর মধ্যে {current}';
    };
    readonly playback: {
      readonly rate: 'প্লেব্যাক রেট {rate}';
    };
    readonly volume: {
      readonly mutedValue: '{percent}, নিঃশব্দ';
      readonly muted: 'নিঃশব্দ';
      readonly label: 'ভলিউম';
      readonly value: 'ভলিউম {value}';
    };
    readonly status: {
      readonly captionsOn: 'ক্যাপশন চালু';
      readonly captionsOff: 'ক্যাপশন বন্ধ';
      readonly paused: 'বিরাম';
      readonly playing: 'চলছে';
      readonly fullscreen: 'পূর্ণ স্ক্রীন';
      readonly pip: 'পিকচার ইন পিকচার';
      readonly exitPip: 'পিকচার ইন পিকচার থেকে বেরিয়ে আসুন';
      readonly seekedTo: '{time}-এ যাওয়া হয়েছে';
    };
    readonly container: {
      readonly label: 'মিডিয়া প্লেয়ার';
    };
    readonly errors: {
      readonly aborted: 'আপনি মিডিয়া প্লেব্যাক বাতিল করেছেন';
      readonly network: 'একটি নেটওয়ার্ক ত্রুটির কারণে মিডিয়া ডাউনলোড আংশিকভাবে ব্যর্থ হয়েছে৷';
      readonly decode: 'মিডিয়া প্লেব্যাক একটি সমস্যার কারণে বা মিডিয়া ব্যবহার করা বৈশিষ্ট্যগুলি আপনার ব্রাউজার সমর্থন করে না বলে বাতিল করা হয়েছে৷';
      readonly source: 'মিডিয়া লোড করা যায়নি, হয় সার্ভার বা নেটওয়ার্ক ব্যর্থ হওয়ার কারণে বা ফর্ম্যাটটি সমর্থিত নয়।';
      readonly encrypted: 'মিডিয়া এনক্রিপ্ট করা হয়েছে এবং এটি ডিক্রিপ্ট করার সমাধান আমাদের কাছে নেই।';
      readonly title: 'কিছু একটা ভুল হয়েছে।';
      readonly unexpected: 'একটি ত্রুটি ঘটেছে। আবার চেষ্টা করুন।';
    };
    readonly common: {
      readonly empty: '';
      readonly ok: 'বন্ধ করুন';
    };
    readonly menu: {
      readonly settings: 'সেটিংস';
      readonly quality: 'গুণমান';
      readonly audio: 'অডিও';
      readonly default: 'ডিফল্ট';
      readonly speed: 'গতি';
      readonly captions: 'ক্যাপশন';
      readonly playbackRate: 'প্লেব্যাক রেট';
      readonly back: 'পিছনে';
      readonly off: 'বন্ধ';
      readonly auto: 'স্বয়ংক্রিয়';
      readonly autoWithLabel: 'স্বয়ংক্রিয় ({label})';
      readonly subtitles: 'সাবটাইটেল';
    };
  };
  readonly ca: {
    readonly buttons: {
      readonly play: 'Reproduir';
      readonly pause: 'Pausa';
      readonly replay: 'Repetir';
      readonly mute: 'Silenciar';
      readonly unmute: 'Activar el so';
    };
    readonly seek: {
      readonly forward: 'Salta endavant {seconds} segons';
      readonly backward: 'Salta enrere {seconds} segons';
    };
    readonly fullscreen: {
      readonly enter: 'Pantalla completa';
      readonly exit: 'Surt de pantalla completa';
    };
    readonly captions: {
      readonly enable: 'Activa subtítols';
      readonly disable: 'Desactiva subtítols';
    };
    readonly pip: {
      readonly enter: 'Imatge en imatge';
      readonly exit: 'Sortir de la imatge en imatge';
    };
    readonly live: {
      readonly playing: 'Reproducció en directe';
      readonly seekToEdge: 'Anar al directe';
      readonly badge: 'En directe';
    };
    readonly cast: {
      readonly start: 'Comença a emetre';
      readonly stop: 'Atura la transmissió';
      readonly connecting: 'Connectant';
    };
    readonly airplay: {
      readonly start: 'Inicia AirPlay';
      readonly stop: 'Atura AirPlay';
    };
    readonly slider: {
      readonly seek: 'Desplaçament';
    };
    readonly time: {
      readonly current: 'Temps actual';
      readonly duration: 'Durada';
      readonly remaining: 'Temps restant';
      readonly remainingSuffix: 'Queden {duration}';
      readonly showElapsed: '{duration}. Mostra el temps transcorregut.';
      readonly showDuration: '{duration}. Mostra la durada.';
      readonly showRemaining: '{duration}. Mostra el temps restant.';
      readonly position: '{current} de {duration}';
    };
    readonly playback: {
      readonly rate: 'Velocitat de reproducció {rate}';
    };
    readonly volume: {
      readonly mutedValue: '{percent}, silenciat';
      readonly muted: 'Silenciat';
      readonly label: 'Volum';
      readonly value: 'Volum {value}';
    };
    readonly status: {
      readonly captionsOn: 'Llegendes activades';
      readonly captionsOff: 'Llegendes desactivades';
      readonly paused: 'En pausa';
      readonly playing: 'Reproduint';
      readonly fullscreen: 'Pantalla completa';
      readonly pip: 'Imatge en imatge';
      readonly exitPip: 'Surt de la imatge en imatge';
      readonly seekedTo: "S'ha saltat a {time}";
    };
    readonly container: {
      readonly label: 'Reproductor multimèdia';
    };
    readonly errors: {
      readonly aborted: 'Has interromput la reproducció del contingut';
      readonly network: 'Un error de xarxa ha interromput la descàrrega del contingut.';
      readonly decode: "La reproducció del contingut s'ha interromput a causa d'un problema de corrupció o perquè el contingut fa servir funcions que el teu navegador no suporta.";
      readonly source: "No s'ha pogut carregar el contingut, ja sigui perquè el servidor o la xarxa han fallat o perquè el format no està suportat.";
      readonly encrypted: 'El contingut està xifrat i no disposem de les claus per desxifrar-lo.';
      readonly title: 'Alguna cosa ha anat malament.';
      readonly unexpected: "S'ha produït un error. Torneu-ho a intentar.";
    };
    readonly common: {
      readonly empty: '';
      readonly ok: 'Tancar';
    };
    readonly menu: {
      readonly settings: 'Configuració';
      readonly quality: 'Qualitat';
      readonly audio: 'Àudio';
      readonly default: 'Predeterminat';
      readonly speed: 'Velocitat';
      readonly captions: 'Subtítols';
      readonly playbackRate: 'Velocitat de reproducció';
      readonly back: 'Enrere';
      readonly off: 'Desactivat';
      readonly auto: 'Automàtic';
      readonly autoWithLabel: 'Automàtic ({label})';
      readonly subtitles: 'Subtítols';
    };
  };
  readonly cs: {
    readonly buttons: {
      readonly play: 'Přehrát';
      readonly pause: 'Pozastavit';
      readonly replay: 'Přehrát znovu';
      readonly mute: 'Ztlumit';
      readonly unmute: 'Zrušit ztlumení';
    };
    readonly seek: {
      readonly forward: 'Posunout vpřed o {seconds} sekund';
      readonly backward: 'Posunout zpět o {seconds} sekund';
    };
    readonly fullscreen: {
      readonly enter: 'Celá obrazovka';
      readonly exit: 'Ukončit celou obrazovku';
    };
    readonly captions: {
      readonly enable: 'Zapnout titulky';
      readonly disable: 'Vypnout titulky';
    };
    readonly pip: {
      readonly enter: 'Obraz v obraze';
      readonly exit: 'Ukončit obraz v obraze';
    };
    readonly live: {
      readonly playing: 'Přehrává se živě';
      readonly seekToEdge: 'Přejít na živé vysílání';
      readonly badge: 'Živě';
    };
    readonly cast: {
      readonly start: 'Začít přenášet';
      readonly stop: 'Zastavit přenos';
      readonly connecting: 'Připojování';
    };
    readonly airplay: {
      readonly start: 'Spustit AirPlay';
      readonly stop: 'Zastavit AirPlay';
    };
    readonly slider: {
      readonly seek: 'Posun';
    };
    readonly time: {
      readonly current: 'Aktuální čas';
      readonly duration: 'Doba trvání';
      readonly remaining: 'Zbývající čas';
      readonly remainingSuffix: 'Zbývá {duration}';
      readonly showElapsed: '{duration}. Zobrazit uplynulý čas.';
      readonly showDuration: '{duration}. Zobrazit délku.';
      readonly showRemaining: '{duration}. Zobrazit zbývající čas.';
      readonly position: '{current} z {duration}';
    };
    readonly playback: {
      readonly rate: 'Rychlost přehrávání {rate}';
    };
    readonly volume: {
      readonly mutedValue: '{percent}, ztlumeno';
      readonly muted: 'Ztlumeno';
      readonly label: 'Hlasitost';
      readonly value: 'Hlasitost {value}';
    };
    readonly status: {
      readonly captionsOn: 'Popisky zapnuty';
      readonly captionsOff: 'Popisky vypnuty';
      readonly paused: 'Pozastaveno';
      readonly playing: 'Přehrávání';
      readonly fullscreen: 'Celá obrazovka';
      readonly pip: 'Obraz v obraze';
      readonly exitPip: 'Ukončit obraz v obraze';
      readonly seekedTo: 'Přesunuto na {time}';
    };
    readonly container: {
      readonly label: 'Přehrávač médií';
    };
    readonly errors: {
      readonly aborted: 'Přehrávání videa bylo přerušeno.';
      readonly network: 'Video nemohlo být načteno kvůli chybě v síti.';
      readonly decode: 'Váš prohlížeč nepodporuje tento formát videa.';
      readonly source: 'Video nemohlo být načteno, buď kvůli chybě serveru, sítě nebo proto, že daný formát není podporován.';
      readonly encrypted: 'Chyba při dešifrování videa.';
      readonly title: 'Něco se pokazilo.';
      readonly unexpected: 'Došlo k chybě. Zkuste to prosím znovu.';
    };
    readonly common: {
      readonly empty: '';
      readonly ok: 'Zavřít';
    };
    readonly menu: {
      readonly settings: 'Nastavení';
      readonly quality: 'Kvalita';
      readonly audio: 'Zvuk';
      readonly default: 'Výchozí';
      readonly speed: 'Rychlost';
      readonly captions: 'Titulky';
      readonly playbackRate: 'Rychlost přehrávání';
      readonly back: 'Zpět';
      readonly off: 'Vypnuto';
      readonly auto: 'Automaticky';
      readonly autoWithLabel: 'Automaticky ({label})';
      readonly subtitles: 'Titulky';
    };
  };
  readonly cy: {
    readonly buttons: {
      readonly play: 'Chwarae';
      readonly pause: 'Oedi';
      readonly replay: 'Ailchwarae';
      readonly mute: 'Pylu';
      readonly unmute: 'Dad-bylu';
    };
    readonly seek: {
      readonly forward: 'Neidla ymlaen {seconds} eiliad';
      readonly backward: 'Neidla yn ôl {seconds} eiliad';
    };
    readonly fullscreen: {
      readonly enter: 'Sgrîn Lawn';
      readonly exit: 'Gadael sgrîn lawn';
    };
    readonly captions: {
      readonly enable: 'Galluogi capsiynau';
      readonly disable: 'Analluogi capsiynau';
    };
    readonly pip: {
      readonly enter: 'Llun mewn llun';
      readonly exit: 'Gadael llun mewn llun';
    };
    readonly live: {
      readonly playing: 'Yn chwarae’n fyw';
      readonly seekToEdge: 'Mynd i’r ymyl byw';
      readonly badge: 'Yn fyw';
    };
    readonly cast: {
      readonly start: 'Dechrau bwrw';
      readonly stop: 'Stopio bwrw';
      readonly connecting: 'Cysylltu';
    };
    readonly airplay: {
      readonly start: 'Cychwyn AirPlay';
      readonly stop: 'Stopio AirPlay';
    };
    readonly slider: {
      readonly seek: 'Chwilio';
    };
    readonly time: {
      readonly current: 'Amser Cyfredol';
      readonly duration: 'Parhad';
      readonly remaining: 'Amser ar ôl';
      readonly remainingSuffix: '{duration} yn weddill';
      readonly showElapsed: '{duration}. Dangos yr amser a aeth heibio.';
      readonly showDuration: '{duration}. Dangos hyd.';
      readonly showRemaining: "{duration}. Dangos yr amser sy'n weddill.";
      readonly position: '{current} o {duration}';
    };
    readonly playback: {
      readonly rate: 'Cyfradd Chwarae {rate}';
    };
    readonly volume: {
      readonly mutedValue: '{percent}, mud';
      readonly muted: 'Mud';
      readonly label: 'Sain';
      readonly value: 'Sain {value}';
    };
    readonly status: {
      readonly captionsOn: 'Capsiynau ymlaen';
      readonly captionsOff: 'Capsiynau i ffwrdd';
      readonly paused: 'Wedi oedi';
      readonly playing: 'Yn chwarae';
      readonly fullscreen: 'Sgrîn lawn';
      readonly pip: 'Llun mewn llun';
      readonly exitPip: 'Gadael llun mewn llun';
      readonly seekedTo: 'Wedi symud i {time}';
    };
    readonly container: {
      readonly label: 'Chwaraewr cyfryngau';
    };
    readonly errors: {
      readonly aborted: 'Atalwyd y fideo gennych';
      readonly network: 'Mae gwall rhwydwaith wedi achosi methiant lawrlwytho.';
      readonly decode: "Atalwyd y fideo oherwydd problem llygredd data neu oherwydd nid yw'ch porwr yn cefnogi nodweddion penodol o'r fideo.";
      readonly source: "Ni lwythodd y fideo, oherwydd methiant gweinydd neu rwydwaith, neu achos nid yw'r system yn cefnogi'r fformat.";
      readonly encrypted: "Mae'r fideo wedi ei amgryptio ac nid oes allweddion gennym.";
      readonly title: "Aeth rhywbeth o'i le.";
      readonly unexpected: 'Digwyddodd gwall. Ceisiwch eto.';
    };
    readonly common: {
      readonly empty: '';
      readonly ok: 'Cau';
    };
    readonly menu: {
      readonly settings: 'Gosodiadau';
      readonly quality: 'Ansawdd';
      readonly audio: 'Sain';
      readonly default: 'Rhagosodedig';
      readonly speed: 'Cyflymder';
      readonly captions: 'Capsiynau';
      readonly playbackRate: 'Cyfradd chwarae';
      readonly back: 'Yn ôl';
      readonly off: 'I ffwrdd';
      readonly auto: 'Awtomatig';
      readonly autoWithLabel: 'Awtomatig ({label})';
      readonly subtitles: 'Isdeitlau';
    };
  };
  readonly da: {
    readonly buttons: {
      readonly play: 'Afspil';
      readonly pause: 'Pause';
      readonly replay: 'Afspil igen';
      readonly mute: 'Uden lyd';
      readonly unmute: 'Med lyd';
    };
    readonly seek: {
      readonly forward: 'Spring {seconds} sekunder frem';
      readonly backward: 'Spring {seconds} sekunder tilbage';
    };
    readonly fullscreen: {
      readonly enter: 'Fuldskærm';
      readonly exit: 'Luk fuldskærm';
    };
    readonly captions: {
      readonly enable: 'Aktivér undertekster';
      readonly disable: 'Deaktiver undertekster';
    };
    readonly pip: {
      readonly enter: 'Billede-i-billede';
      readonly exit: 'Afslut billede-i-billede';
    };
    readonly live: {
      readonly playing: 'Afspiller live';
      readonly seekToEdge: 'Gå til live';
      readonly badge: 'Live';
    };
    readonly cast: {
      readonly start: 'Start afsendelse';
      readonly stop: 'Stop afsendelse';
      readonly connecting: 'Forbinder';
    };
    readonly airplay: {
      readonly start: 'Start AirPlay';
      readonly stop: 'Stop AirPlay';
    };
    readonly slider: {
      readonly seek: 'Spol';
    };
    readonly time: {
      readonly current: 'Aktuel tid';
      readonly duration: 'Varighed';
      readonly remaining: 'Resterende tid';
      readonly remainingSuffix: '{duration} tilbage';
      readonly showElapsed: '{duration}. Vis forløbet tid.';
      readonly showDuration: '{duration}. Vis varighed.';
      readonly showRemaining: '{duration}. Vis resterende tid.';
      readonly position: '{current} af {duration}';
    };
    readonly playback: {
      readonly rate: 'Afspilningsrate {rate}';
    };
    readonly volume: {
      readonly mutedValue: '{percent}, lydløs';
      readonly muted: 'Lydløs';
      readonly label: 'Lydstyrke';
      readonly value: 'Lydstyrke {value}';
    };
    readonly status: {
      readonly captionsOn: 'Undertekster til';
      readonly captionsOff: 'Undertekster fra';
      readonly paused: 'Pauseret';
      readonly playing: 'Afspiller';
      readonly fullscreen: 'Fuldskærm';
      readonly pip: 'Billede i billede';
      readonly exitPip: 'Afslut billede i billede';
      readonly seekedTo: 'Sprunget til {time}';
    };
    readonly container: {
      readonly label: 'Medieafspiller';
    };
    readonly errors: {
      readonly aborted: 'Du afbrød videoafspilningen.';
      readonly network: 'En netværksfejl fik download af videoen til at fejle.';
      readonly decode: 'Videoafspilningen blev afbrudt på grund af ødelagte data eller fordi videoen benyttede faciliteter som din browser ikke understøtter.';
      readonly source: 'Videoen kunne ikke indlæses, enten fordi serveren eller netværket fejlede, eller fordi formatet ikke er understøttet.';
      readonly encrypted: 'Mediet er krypteret, og der er ingen nøgler til at dekryptere det.';
      readonly title: 'Noget gik galt.';
      readonly unexpected: 'Der opstod en fejl. Prøv igen.';
    };
    readonly common: {
      readonly empty: '';
      readonly ok: 'OK';
    };
    readonly menu: {
      readonly settings: 'Indstillinger';
      readonly quality: 'Kvalitet';
      readonly audio: 'Lyd';
      readonly default: 'Standard';
      readonly speed: 'Hastighed';
      readonly captions: 'Undertekster';
      readonly playbackRate: 'Afspilningshastighed';
      readonly back: 'Tilbage';
      readonly off: 'Fra';
      readonly auto: 'Auto';
      readonly autoWithLabel: 'Auto ({label})';
      readonly subtitles: 'Undertekster';
    };
  };
  readonly de: {
    readonly buttons: {
      readonly play: 'Wiedergabe';
      readonly pause: 'Pause';
      readonly replay: 'Erneut abspielen';
      readonly mute: 'Stumm schalten';
      readonly unmute: 'Ton einschalten';
    };
    readonly seek: {
      readonly forward: '{seconds} Sekunden vorwärts';
      readonly backward: '{seconds} Sekunden zurück';
    };
    readonly fullscreen: {
      readonly enter: 'Vollbild';
      readonly exit: 'Vollbild beenden';
    };
    readonly captions: {
      readonly enable: 'Untertitel einschalten';
      readonly disable: 'Untertitel ausschalten';
    };
    readonly pip: {
      readonly enter: 'Bild-im-Bild-Modus';
      readonly exit: 'Bild-im-Bild-Modus beenden';
    };
    readonly live: {
      readonly playing: 'Wird live wiedergegeben';
      readonly seekToEdge: 'Zum Live-Rand springen';
      readonly badge: 'Live';
    };
    readonly cast: {
      readonly start: 'Übertragung starten';
      readonly stop: 'Übertragung beenden';
      readonly connecting: 'Verbinden';
    };
    readonly airplay: {
      readonly start: 'AirPlay starten';
      readonly stop: 'AirPlay stoppen';
    };
    readonly slider: {
      readonly seek: 'Spule';
    };
    readonly time: {
      readonly current: 'Aktueller Zeitpunkt';
      readonly duration: 'Dauer';
      readonly remaining: 'Verbleibende Zeit';
      readonly remainingSuffix: 'Noch {duration}';
      readonly showElapsed: '{duration}. Verstrichene Zeit anzeigen.';
      readonly showDuration: '{duration}. Dauer anzeigen.';
      readonly showRemaining: '{duration}. Verbleibende Zeit anzeigen.';
      readonly position: '{current} von {duration}';
    };
    readonly playback: {
      readonly rate: 'Wiedergabegeschwindigkeit {rate}';
    };
    readonly volume: {
      readonly mutedValue: '{percent}, stummgeschaltet';
      readonly muted: 'Stummgeschaltet';
      readonly label: 'Lautstärke';
      readonly value: 'Lautstärke {value}';
    };
    readonly status: {
      readonly captionsOn: 'Untertitel ein';
      readonly captionsOff: 'Untertitel aus';
      readonly paused: 'Pausiert';
      readonly playing: 'Wird wiedergegeben';
      readonly fullscreen: 'Vollbild';
      readonly pip: 'Bild-in-Bild';
      readonly exitPip: 'Bild-in-Bild beenden';
      readonly seekedTo: 'Zu {time} gesprungen';
    };
    readonly container: {
      readonly label: 'Mediaplayer';
    };
    readonly errors: {
      readonly aborted: 'Sie haben die Videowiedergabe abgebrochen.';
      readonly network: 'Der Videodownload ist aufgrund eines Netzwerkfehlers fehlgeschlagen.';
      readonly decode: 'Die Videowiedergabe wurde entweder wegen eines Problems mit einem beschädigten Video oder wegen verwendeten Funktionen, die vom Browser nicht unterstützt werden, abgebrochen.';
      readonly source: 'Das Video konnte nicht geladen werden, da entweder ein Server- oder Netzwerkfehler auftrat oder das Format nicht unterstützt wird.';
      readonly encrypted: 'Die Entschlüsselungsschlüssel für den verschlüsselten Medieninhalt sind nicht verfügbar.';
      readonly title: 'Etwas ist schiefgelaufen.';
      readonly unexpected: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.';
    };
    readonly common: {
      readonly empty: '';
      readonly ok: 'Schließen';
    };
    readonly menu: {
      readonly settings: 'Einstellungen';
      readonly quality: 'Qualität';
      readonly audio: 'Ton';
      readonly default: 'Standard';
      readonly speed: 'Geschwindigkeit';
      readonly captions: 'Untertitel';
      readonly playbackRate: 'Wiedergabegeschwindigkeit';
      readonly back: 'Zurück';
      readonly off: 'Aus';
      readonly auto: 'Auto';
      readonly autoWithLabel: 'Auto ({label})';
      readonly subtitles: 'Untertitel';
    };
  };
  readonly el: {
    readonly buttons: {
      readonly play: 'Aναπαραγωγή';
      readonly pause: 'Παύση';
      readonly replay: 'Επανάληψη';
      readonly mute: 'Σίγαση';
      readonly unmute: 'Kατάργηση σίγασης';
    };
    readonly seek: {
      readonly forward: 'Μεταβείτε μπροστά {seconds} δευτερόλεπτα';
      readonly backward: 'Μεταβείτε πίσω {seconds} δευτερόλεπτα';
    };
    readonly fullscreen: {
      readonly enter: 'Πλήρης οθόνη';
      readonly exit: 'Έξοδος από πλήρη οθόνη';
    };
    readonly captions: {
      readonly enable: 'Ενεργοποίηση υποτίτλων';
      readonly disable: 'Απενεργοποίηση υποτίτλων';
    };
    readonly pip: {
      readonly enter: 'Εικόνα-μέσα-σε-Εικόνα';
      readonly exit: 'Έξοδος από την Εικόνα-μέσα-σε-Εικόνα';
    };
    readonly live: {
      readonly playing: 'Αναπαραγωγή ζωντανά';
      readonly seekToEdge: 'Μετάβαση στο ζωντανό';
      readonly badge: 'Ζωντανά';
    };
    readonly cast: {
      readonly start: 'Έναρξη μετάδοσης';
      readonly stop: 'Διακοπή μετάδοσης';
      readonly connecting: 'Σύνδεση';
    };
    readonly airplay: {
      readonly start: 'Έναρξη AirPlay';
      readonly stop: 'Διακοπή AirPlay';
    };
    readonly slider: {
      readonly seek: 'Μετακίνηση';
    };
    readonly time: {
      readonly current: 'Τρέχων χρόνος';
      readonly duration: 'Συνολικός χρόνος';
      readonly remaining: 'Υπολοιπόμενος χρόνος';
      readonly remainingSuffix: 'Απομένουν {duration}';
      readonly showElapsed: '{duration}. Εμφάνιση χρόνου που πέρασε.';
      readonly showDuration: '{duration}. Εμφάνιση διάρκειας.';
      readonly showRemaining: '{duration}. Εμφάνιση υπολειπόμενου χρόνου.';
      readonly position: '{current} από {duration}';
    };
    readonly playback: {
      readonly rate: 'Ρυθμός αναπαραγωγής {rate}';
    };
    readonly volume: {
      readonly mutedValue: '{percent}, σε σίγαση';
      readonly muted: 'Σε σίγαση';
      readonly label: 'Ένταση';
      readonly value: 'Ένταση {value}';
    };
    readonly status: {
      readonly captionsOn: 'Λεζάντες ενεργές';
      readonly captionsOff: 'Λεζάντες ανενεργές';
      readonly paused: 'Σε παύση';
      readonly playing: 'Αναπαραγωγή';
      readonly fullscreen: 'Πλήρης οθόνη';
      readonly pip: 'Εικόνα μέσα σε εικόνα';
      readonly exitPip: 'Έξοδος από εικόνα μέσα σε εικόνα';
      readonly seekedTo: 'Μετάβαση σε {time}';
    };
    readonly container: {
      readonly label: 'Πρόγραμμα αναπαραγωγής πολυμέσων';
    };
    readonly errors: {
      readonly aborted: 'Ακυρώσατε την αναπαραγωγή';
      readonly network: 'Ένα σφάλμα δικτύου προκάλεσε την αποτυχία μεταφόρτωσης του αρχείου προς αναπαραγωγή.';
      readonly decode: 'Η αναπαραγωγή ακυρώθηκε είτε λόγω κατεστραμμένου αρχείου, είτε γιατί το αρχείο απαιτεί λειτουργίες που δεν υποστηρίζονται από το πρόγραμμα περιήγησης που χρησιμοποιείτε.';
      readonly source: 'Το αρχείο προς αναπαραγωγή δεν ήταν δυνατό να φορτωθεί είτε γιατί υπήρξε σφάλμα στον διακομιστή ή το δίκτυο, είτε γιατί ο τύπος του αρχείου δεν υποστηρίζεται.';
      readonly encrypted: 'Το αρχείο προς αναπαραγωγή είναι κρυπτογραφημένo και δεν υπάρχουν τα απαραίτητα κλειδιά αποκρυπτογράφησης.';
      readonly title: 'Κάτι πήγε στραβά.';
      readonly unexpected: 'Παρουσιάστηκε σφάλμα. Δοκιμάστε ξανά.';
    };
    readonly common: {
      readonly empty: '';
      readonly ok: 'Κλείσιμο';
    };
    readonly menu: {
      readonly settings: 'Ρυθμίσεις';
      readonly quality: 'Ποιότητα';
      readonly audio: 'Ήχος';
      readonly default: 'Προεπιλογή';
      readonly speed: 'Ταχύτητα';
      readonly captions: 'Λεζάντες';
      readonly playbackRate: 'Ρυθμός αναπαραγωγής';
      readonly back: 'Πίσω';
      readonly off: 'Απενεργοποίηση';
      readonly auto: 'Αυτόματα';
      readonly autoWithLabel: 'Αυτόματα ({label})';
      readonly subtitles: 'Υπότιτλοι';
    };
  };
  readonly es: {
    readonly buttons: {
      readonly play: 'Reproducir';
      readonly pause: 'Pausa';
      readonly replay: 'Volver a reproducir';
      readonly mute: 'Desactivar el sonido';
      readonly unmute: 'Activar el sonido';
    };
    readonly seek: {
      readonly forward: 'Avanza {seconds} segundos';
      readonly backward: 'Retrocede {seconds} segundos';
    };
    readonly fullscreen: {
      readonly enter: 'Pantalla completa';
      readonly exit: 'Salir de pantalla completa';
    };
    readonly captions: {
      readonly enable: 'Activar subtítulos';
      readonly disable: 'Desactivar subtítulos';
    };
    readonly pip: {
      readonly enter: 'Imagen sobre imagen';
      readonly exit: 'Salir de imagen sobre imagen';
    };
    readonly live: {
      readonly playing: 'Reproduciendo en directo';
      readonly seekToEdge: 'Ir al directo';
      readonly badge: 'Directo';
    };
    readonly cast: {
      readonly start: 'Iniciar transmisión';
      readonly stop: 'Detener transmisión';
      readonly connecting: 'Conectando';
    };
    readonly airplay: {
      readonly start: 'Iniciar AirPlay';
      readonly stop: 'Detener AirPlay';
    };
    readonly slider: {
      readonly seek: 'Buscar';
    };
    readonly time: {
      readonly current: 'Tiempo reproducido';
      readonly duration: 'Duración total';
      readonly remaining: 'Tiempo restante';
      readonly remainingSuffix: 'Quedan {duration}';
      readonly showElapsed: '{duration}. Mostrar tiempo transcurrido.';
      readonly showDuration: '{duration}. Mostrar duración.';
      readonly showRemaining: '{duration}. Mostrar tiempo restante.';
      readonly position: '{current} de {duration}';
    };
    readonly playback: {
      readonly rate: 'Velocidad de reproducción {rate}';
    };
    readonly volume: {
      readonly mutedValue: '{percent}, silenciado';
      readonly muted: 'Silenciado';
      readonly label: 'Volumen';
      readonly value: 'Volumen {value}';
    };
    readonly status: {
      readonly captionsOn: 'Subtítulos activados';
      readonly captionsOff: 'Subtítulos desactivados';
      readonly paused: 'En pausa';
      readonly playing: 'Reproduciendo';
      readonly fullscreen: 'Pantalla completa';
      readonly pip: 'Imagen en imagen';
      readonly exitPip: 'Salir de imagen en imagen';
      readonly seekedTo: 'Se ha saltado a {time}';
    };
    readonly container: {
      readonly label: 'Reproductor multimedia';
    };
    readonly errors: {
      readonly aborted: 'Ha interrumpido la reproducción del vídeo.';
      readonly network: 'Un error de red ha interrumpido la descarga del vídeo.';
      readonly decode: 'La reproducción de vídeo se ha interrumpido por un problema de corrupción de datos o porque el vídeo precisa funciones que su navegador no ofrece.';
      readonly source: 'No se ha podido cargar el vídeo debido a un fallo de red o del servidor o porque el formato es incompatible.';
      readonly encrypted: 'El material audiovisual está cifrado y no tenemos las claves para descifrarlo.';
      readonly title: 'Algo ha salido mal.';
      readonly unexpected: 'Se ha producido un error. Inténtalo de nuevo.';
    };
    readonly common: {
      readonly empty: '';
      readonly ok: 'Cerrar';
    };
    readonly menu: {
      readonly settings: 'Configuración';
      readonly quality: 'Calidad';
      readonly audio: 'Audio';
      readonly default: 'Predeterminado';
      readonly speed: 'Velocidad';
      readonly captions: 'Subtítulos';
      readonly playbackRate: 'Velocidad de reproducción';
      readonly back: 'Atrás';
      readonly off: 'Desactivado';
      readonly auto: 'Automático';
      readonly autoWithLabel: 'Automático ({label})';
      readonly subtitles: 'Subtítulos';
    };
  };
  readonly et: {
    readonly buttons: {
      readonly play: 'Esita';
      readonly pause: 'Paus';
      readonly replay: 'Esita uuesti';
      readonly mute: 'Vaigista';
      readonly unmute: 'Lõpeta vaigistus';
    };
    readonly seek: {
      readonly forward: 'Liigu edasi {seconds} sekundit';
      readonly backward: 'Liigu tagasi {seconds} sekundit';
    };
    readonly fullscreen: {
      readonly enter: 'Täisekraan';
      readonly exit: 'Välju täisekraanist';
    };
    readonly captions: {
      readonly enable: 'Lülita subtiitrid sisse';
      readonly disable: 'Lülita subtiitrid välja';
    };
    readonly pip: {
      readonly enter: 'Pilt pildis';
      readonly exit: 'Välju funktsioonist pilt pildis';
    };
    readonly live: {
      readonly playing: 'Mängib reaalajas';
      readonly seekToEdge: 'Mine otseülekande äärele';
      readonly badge: 'Otse';
    };
    readonly cast: {
      readonly start: 'Alusta ülekandmist';
      readonly stop: 'Lõpeta ülekandmine';
      readonly connecting: 'Ühendumine';
    };
    readonly airplay: {
      readonly start: 'Käivita AirPlay';
      readonly stop: 'Peata AirPlay';
    };
    readonly slider: {
      readonly seek: 'Kerimine';
    };
    readonly time: {
      readonly current: 'Praegune aeg';
      readonly duration: 'Kestus';
      readonly remaining: 'Järelejäänud aeg';
      readonly remainingSuffix: 'Jäänud {duration}';
      readonly showElapsed: '{duration}. Kuva möödunud aeg.';
      readonly showDuration: '{duration}. Kuva kestus.';
      readonly showRemaining: '{duration}. Kuva järelejäänud aeg.';
      readonly position: '{current} / {duration}';
    };
    readonly playback: {
      readonly rate: 'Taasesituse kiirus {rate}';
    };
    readonly volume: {
      readonly mutedValue: '{percent}, vaigistatud';
      readonly muted: 'Vaigistatud';
      readonly label: 'Helitugevus';
      readonly value: 'Helitugevus {value}';
    };
    readonly status: {
      readonly captionsOn: 'Pealdised sees';
      readonly captionsOff: 'Pealdised väljas';
      readonly paused: 'Pausitud';
      readonly playing: 'Esitamine';
      readonly fullscreen: 'Täisekraan';
      readonly pip: 'Pilt pildis';
      readonly exitPip: 'Välju funktsioonist pilt pildis';
      readonly seekedTo: 'Liigutud ajale {time}';
    };
    readonly container: {
      readonly label: 'Meediumipleier';
    };
    readonly errors: {
      readonly aborted: 'Katkestasid taasesituse';
      readonly network: 'Võrguvea tõttu nurjus meediumifaili allalaadimine poole pealt.';
      readonly decode: 'Meediumifaili taasesitamine katkestati, kuna fail on rikutud või see kasutab funktsiooni, mida sinu brauser ei toeta.';
      readonly source: 'Seda meediumifaili ei õnnestunud laadida, kuna serveris või võrgus esines tõrge või kuna vormingut ei toetata.';
      readonly encrypted: 'See meediumifail on krüpteeritud ja meil pole dekrüpteerimiseks vajalikku võtit.';
      readonly title: 'Midagi läks valesti.';
      readonly unexpected: 'Esines viga. Palun proovige uuesti.';
    };
    readonly common: {
      readonly empty: '';
      readonly ok: 'Sule';
    };
    readonly menu: {
      readonly settings: 'Seaded';
      readonly quality: 'Kvaliteet';
      readonly audio: 'Heli';
      readonly default: 'Vaikimisi';
      readonly speed: 'Kiirus';
      readonly captions: 'Subtiitrid';
      readonly playbackRate: 'Taasesituse kiirus';
      readonly back: 'Tagasi';
      readonly off: 'Väljas';
      readonly auto: 'Automaatne';
      readonly autoWithLabel: 'Automaatne ({label})';
      readonly subtitles: 'Subtiitrid';
    };
  };
  readonly eu: {
    readonly buttons: {
      readonly play: 'Hasi';
      readonly pause: 'Gelditu';
      readonly replay: 'Berriz hasi';
      readonly mute: 'Ixildu';
      readonly unmute: 'Soinua jarri';
    };
    readonly seek: {
      readonly forward: 'Joan aurrera {seconds} segundo';
      readonly backward: 'Joan atzera {seconds} segundo';
    };
    readonly fullscreen: {
      readonly enter: 'Pantaila osoa';
      readonly exit: 'Irten pantaila osotik';
    };
    readonly captions: {
      readonly enable: 'Aktibatu azpitituluak';
      readonly disable: 'Desaktibatu azpitituluak';
    };
    readonly pip: {
      readonly enter: 'Irudiz-irudi';
      readonly exit: 'Irten irudiz-irudiztik';
    };
    readonly live: {
      readonly playing: 'Zuzenean erreproduzitzen';
      readonly seekToEdge: 'Zuzeneko ertzeraino joan';
      readonly badge: 'Zuzenean';
    };
    readonly cast: {
      readonly start: 'Hasi emankizuna';
      readonly stop: 'Gelditu emankizuna';
      readonly connecting: 'Konektatzen';
    };
    readonly airplay: {
      readonly start: 'Hasi AirPlay';
      readonly stop: 'Gelditu AirPlay';
    };
    readonly slider: {
      readonly seek: 'Bilatu';
    };
    readonly time: {
      readonly current: 'Uneko denbora';
      readonly duration: 'Iraupena';
      readonly remaining: 'Gelditzen den denbora';
      readonly remainingSuffix: 'Geratzen den {duration}';
      readonly showElapsed: '{duration}. Erakutsi igarotako denbora.';
      readonly showDuration: '{duration}. Erakutsi iraupena.';
      readonly showRemaining: '{duration}. Erakutsi geratzen den denbora.';
      readonly position: '{current} / {duration}';
    };
    readonly playback: {
      readonly rate: 'Abiadura {rate}';
    };
    readonly volume: {
      readonly mutedValue: '{percent}, isilarazia';
      readonly muted: 'Isilarazia';
      readonly label: 'Bolumena';
      readonly value: 'Bolumena {value}';
    };
    readonly status: {
      readonly captionsOn: 'Oharrak aktibo';
      readonly captionsOff: 'Oharrak ez aktibo';
      readonly paused: 'Geldituta';
      readonly playing: 'Erreproduzitzen';
      readonly fullscreen: 'Pantaila osoa';
      readonly pip: 'Irudiz irudi';
      readonly exitPip: 'Irten irudiz irudiztik';
      readonly seekedTo: '{time} denborara jauzi egin da';
    };
    readonly container: {
      readonly label: 'Multimedia-erreproduzitzailea';
    };
    readonly errors: {
      readonly aborted: 'Bertan behera utzi duzu';
      readonly network: 'Sare errore batek deskargak huts egitea eragin du.';
      readonly decode: 'Bertan behera gelditu da fitxategia ondo ez dagoelako edo zure nabigatzailean erabili ezin diren ezaugarriak dituelako.';
      readonly source: 'Media ezin izan da kargatu, zerbitzariak edo sareak huts egin duelako edo formatu horretako media erabili ezin delako.';
      readonly encrypted: 'Media zifratuta dago eta ez ditugu beharrezko gakoak.';
      readonly title: 'Zerbait gaizki joan da.';
      readonly unexpected: 'Errore bat gertatu da. Saiatu berriro.';
    };
    readonly common: {
      readonly empty: '';
      readonly ok: 'Itxi';
    };
    readonly menu: {
      readonly settings: 'Ezarpenak';
      readonly quality: 'Kalitatea';
      readonly audio: 'Audioa';
      readonly default: 'Lehenetsia';
      readonly speed: 'Abiadura';
      readonly captions: 'Azpitituluak';
      readonly playbackRate: 'Erreprodukzio-abiadura';
      readonly back: 'Atzera';
      readonly off: 'Desaktibatuta';
      readonly auto: 'Automatikoa';
      readonly autoWithLabel: 'Automatikoa ({label})';
      readonly subtitles: 'Azpitituluak';
    };
  };
  readonly fa: {
    readonly buttons: {
      readonly play: 'پخش';
      readonly pause: 'توقف';
      readonly replay: 'پخش مجدد';
      readonly mute: 'بی‌صدا';
      readonly unmute: 'صدادار';
    };
    readonly seek: {
      readonly forward: '{seconds} ثانیه بعد';
      readonly backward: '{seconds} ثانیه قبل';
    };
    readonly fullscreen: {
      readonly enter: 'تمام‌صفحه';
      readonly exit: 'خروج از تمام‌صفحه';
    };
    readonly captions: {
      readonly enable: 'فعال‌سازی زیرنویس';
      readonly disable: 'غیرفعال‌سازی زیرنویس';
    };
    readonly pip: {
      readonly enter: 'تصویر در تصویر';
      readonly exit: 'خروج از حالت تصویر در تصویر';
    };
    readonly live: {
      readonly playing: 'پخش زنده';
      readonly seekToEdge: 'رفتن به پخش زنده';
      readonly badge: 'زنده';
    };
    readonly cast: {
      readonly start: 'شروع پخش به تلویزیون';
      readonly stop: 'توقف پخش به تلویزیون';
      readonly connecting: 'در حال اتصال';
    };
    readonly airplay: {
      readonly start: 'شروع AirPlay';
      readonly stop: 'توقف AirPlay';
    };
    readonly slider: {
      readonly seek: 'جستجو';
    };
    readonly time: {
      readonly current: 'زمان فعلی';
      readonly duration: 'مدت';
      readonly remaining: 'زمان باقی‌مانده';
      readonly remainingSuffix: '{duration} باقی‌مانده';
      readonly showElapsed: '{duration}. نمایش زمان سپری‌شده.';
      readonly showDuration: '{duration}. نمایش مدت.';
      readonly showRemaining: '{duration}. نمایش زمان باقی‌مانده.';
      readonly position: '{current} از {duration}';
    };
    readonly playback: {
      readonly rate: 'سرعت پخش {rate}';
    };
    readonly volume: {
      readonly mutedValue: '{percent}, بی‌صدا';
      readonly muted: 'بی‌صدا';
      readonly label: 'صدا';
      readonly value: 'صدا {value}';
    };
    readonly status: {
      readonly captionsOn: 'توضیحات روشن';
      readonly captionsOff: 'توضیحات خاموش';
      readonly paused: 'متوقف شده';
      readonly playing: 'در حال پخش';
      readonly fullscreen: 'تمام‌صفحه';
      readonly pip: 'تصویر در تصویر';
      readonly exitPip: 'خروج از حالت تصویر در تصویر';
      readonly seekedTo: 'پرش به {time}';
    };
    readonly container: {
      readonly label: 'پخش‌کننده رسانه';
    };
    readonly errors: {
      readonly aborted: 'شما پخش رسانه را قطع نمودید';
      readonly network: 'وقوع مشکلی در شبکه باعث اختلال در دانلود رسانه شد.';
      readonly decode: 'پخش رسانه به‌علت اشکال در آن یا عدم پشتیبانی مرورگر شما قطع شد.';
      readonly source: 'رسانه قابل بارگیری نیست. ممکن است مشکلی در شبکه یا سرور رخ داده باشد یا قالب رسانه در دستگاه شما پشتیبانی نشود.';
      readonly encrypted: 'این رسانه رمزنگاری شده‌است و کلیدهای رمزگشایی آن موجود نیست.';
      readonly title: 'مشکلی پیش آمد.';
      readonly unexpected: 'خطایی رخ داد. لطفاً دوباره امتحان کنید.';
    };
    readonly common: {
      readonly empty: '';
      readonly ok: 'بستن';
    };
    readonly menu: {
      readonly settings: 'تنظیمات';
      readonly quality: 'کیفیت';
      readonly audio: 'صدا';
      readonly default: 'پیش‌فرض';
      readonly speed: 'سرعت';
      readonly captions: 'زیرنویس‌ها';
      readonly playbackRate: 'سرعت پخش';
      readonly back: 'بازگشت';
      readonly off: 'خاموش';
      readonly auto: 'خودکار';
      readonly autoWithLabel: 'خودکار ({label})';
      readonly subtitles: 'زیرنویس‌ها';
    };
  };
  readonly fi: {
    readonly buttons: {
      readonly play: 'Toista';
      readonly pause: 'Keskeytä toisto';
      readonly replay: 'Toista uudelleen';
      readonly mute: 'Mykistä';
      readonly unmute: 'Poista mykistys';
    };
    readonly seek: {
      readonly forward: 'Hyppää eteenpäin {seconds} sekuntia';
      readonly backward: 'Hyppää taaksepäin {seconds} sekuntia';
    };
    readonly fullscreen: {
      readonly enter: 'Koko näytön tila';
      readonly exit: 'Poistu koko näytöltä';
    };
    readonly captions: {
      readonly enable: 'Ota tekstitykset käyttöön';
      readonly disable: 'Poista tekstitykset käytöstä';
    };
    readonly pip: {
      readonly enter: 'Kuva kuvassa -tila';
      readonly exit: 'Poistu kuva kuvassa -tilasta';
    };
    readonly live: {
      readonly playing: 'Toistetaan livenä';
      readonly seekToEdge: 'Siirry liveen';
      readonly badge: 'Live';
    };
    readonly cast: {
      readonly start: 'Aloita lähetys';
      readonly stop: 'Lopeta lähetys';
      readonly connecting: 'Yhdistetään';
    };
    readonly airplay: {
      readonly start: 'Käynnistä AirPlay';
      readonly stop: 'Pysäytä AirPlay';
    };
    readonly slider: {
      readonly seek: 'Kelaa';
    };
    readonly time: {
      readonly current: 'Tämänhetkinen aika';
      readonly duration: 'Kokonaiskesto';
      readonly remaining: 'Jäljellä oleva aika';
      readonly remainingSuffix: '{duration} jäljellä';
      readonly showElapsed: '{duration}. Näytä kulunut aika.';
      readonly showDuration: '{duration}. Näytä kesto.';
      readonly showRemaining: '{duration}. Näytä jäljellä oleva aika.';
      readonly position: '{current} / {duration}';
    };
    readonly playback: {
      readonly rate: 'Toistonopeus {rate}';
    };
    readonly volume: {
      readonly mutedValue: '{percent}, mykistetty';
      readonly muted: 'Mykistetty';
      readonly label: 'Äänenvoimakkuus';
      readonly value: 'Äänenvoimakkuus {value}';
    };
    readonly status: {
      readonly captionsOn: 'Tekstitys päällä';
      readonly captionsOff: 'Tekstitys pois';
      readonly paused: 'Keskeytetty';
      readonly playing: 'Toistetaan';
      readonly fullscreen: 'Koko näyttö';
      readonly pip: 'Kuva kuvassa';
      readonly exitPip: 'Poistu kuva kuvassa -tilasta';
      readonly seekedTo: 'Siirrytty kohtaan {time}';
    };
    readonly container: {
      readonly label: 'Mediasoitin';
    };
    readonly errors: {
      readonly aborted: 'Olet keskeyttänyt videotoiston';
      readonly network: 'Verkkovirhe keskeytti videon latauksen.';
      readonly decode: 'Videon toisto keskeytyi, koska videotiedosto on vioittunut tai käyttää toimintoja, joita selaimesi ei tue.';
      readonly source: 'Videon lataus ei onnistunut joko palvelin- tai verkkovirheestä tai väärästä formaatista johtuen.';
      readonly encrypted: 'Media on salattu eikä siihen ole purkuavaimia.';
      readonly title: 'Jotain meni pieleen.';
      readonly unexpected: 'Tapahtui virhe. Yritä uudelleen.';
    };
    readonly common: {
      readonly empty: '';
      readonly ok: 'OK';
    };
    readonly menu: {
      readonly settings: 'Asetukset';
      readonly quality: 'Laatu';
      readonly audio: 'Ääni';
      readonly default: 'Oletus';
      readonly speed: 'Nopeus';
      readonly captions: 'Tekstitykset';
      readonly playbackRate: 'Toistonopeus';
      readonly back: 'Takaisin';
      readonly off: 'Pois';
      readonly auto: 'Automaattinen';
      readonly autoWithLabel: 'Automaattinen ({label})';
      readonly subtitles: 'Tekstitykset';
    };
  };
  readonly fr: {
    readonly buttons: {
      readonly play: 'Lecture';
      readonly pause: 'Pause';
      readonly replay: 'Revoir';
      readonly mute: 'Mettre en sourdine';
      readonly unmute: 'Activer le son';
    };
    readonly seek: {
      readonly forward: 'Avancer de {seconds} secondes';
      readonly backward: 'Reculer de {seconds} secondes';
    };
    readonly fullscreen: {
      readonly enter: 'Plein écran';
      readonly exit: 'Quitter le plein écran';
    };
    readonly captions: {
      readonly enable: 'Activer les sous-titres';
      readonly disable: 'Désactiver les sous-titres';
    };
    readonly pip: {
      readonly enter: "Image dans l'image";
      readonly exit: "Quitter le mode image dans l'image";
    };
    readonly live: {
      readonly playing: 'Lecture en direct';
      readonly seekToEdge: 'Aller au direct';
      readonly badge: 'En direct';
    };
    readonly cast: {
      readonly start: 'Démarrer la diffusion';
      readonly stop: 'Arrêter la diffusion';
      readonly connecting: 'Connexion';
    };
    readonly airplay: {
      readonly start: 'Démarrer AirPlay';
      readonly stop: 'Arrêter AirPlay';
    };
    readonly slider: {
      readonly seek: 'Barre de lecture';
    };
    readonly time: {
      readonly current: 'Temps actuel';
      readonly duration: 'Durée';
      readonly remaining: 'Temps restant';
      readonly remainingSuffix: 'Il reste {duration}';
      readonly showElapsed: '{duration}. Afficher le temps écoulé.';
      readonly showDuration: '{duration}. Afficher la durée.';
      readonly showRemaining: '{duration}. Afficher le temps restant.';
      readonly position: '{current} de {duration}';
    };
    readonly playback: {
      readonly rate: 'Vitesse de lecture {rate}';
    };
    readonly volume: {
      readonly mutedValue: '{percent}, son coupé';
      readonly muted: 'Son coupé';
      readonly label: 'Niveau de volume';
      readonly value: 'Niveau de volume {value}';
    };
    readonly status: {
      readonly captionsOn: 'Sous-titres activés';
      readonly captionsOff: 'Sous-titres désactivés';
      readonly paused: 'En pause';
      readonly playing: 'Lecture en cours';
      readonly fullscreen: 'Plein écran';
      readonly pip: 'Image dans l’image';
      readonly exitPip: 'Quitter l’image dans l’image';
      readonly seekedTo: 'Position de lecture : {time}';
    };
    readonly container: {
      readonly label: 'Lecteur multimédia';
    };
    readonly errors: {
      readonly aborted: 'Vous avez interrompu la lecture de la vidéo.';
      readonly network: 'Une erreur de réseau a interrompu le téléchargement de la vidéo.';
      readonly decode: "La lecture de la vidéo a été interrompue à cause d'un problème de corruption ou parce que la vidéo utilise des fonctionnalités non prises en charge par votre navigateur.";
      readonly source: "Cette vidéo n'a pas pu être chargée, soit parce que le serveur ou le réseau a échoué ou parce que le format n'est pas reconnu.";
      readonly encrypted: "Le média est chiffré et nous n'avons pas les clés pour le déchiffrer.";
      readonly title: 'Une erreur s’est produite.';
      readonly unexpected: 'Une erreur s’est produite. Veuillez réessayer.';
    };
    readonly common: {
      readonly empty: '';
      readonly ok: 'Fermer';
    };
    readonly menu: {
      readonly settings: 'Paramètres';
      readonly quality: 'Qualité';
      readonly audio: 'Audio';
      readonly default: 'Par défaut';
      readonly speed: 'Vitesse';
      readonly captions: 'Sous-titres';
      readonly playbackRate: 'Vitesse de lecture';
      readonly back: 'Retour';
      readonly off: 'Désactivé';
      readonly auto: 'Auto';
      readonly autoWithLabel: 'Auto ({label})';
      readonly subtitles: 'Sous-titres';
    };
  };
  readonly gd: {
    readonly buttons: {
      readonly play: 'Cluich';
      readonly pause: 'Cuir ’na stad';
      readonly replay: 'Cluich a-rithist';
      readonly mute: 'Mùch';
      readonly unmute: 'Dì-mhùch';
    };
    readonly seek: {
      readonly forward: 'Gluais air adhart {seconds} diog';
      readonly backward: 'Gluais air ais {seconds} diog';
    };
    readonly fullscreen: {
      readonly enter: 'Làn-sgrìn';
      readonly exit: 'Fàg làn-sgrìn';
    };
    readonly captions: {
      readonly enable: 'Cuir capsaidean air';
      readonly disable: 'Toir capsaidean dheth';
    };
    readonly pip: {
      readonly enter: 'Dealbh beag anns a’ dealbh mhòr';
      readonly exit: 'Fàg dealbh beag anns a’ dealbh mhòr';
    };
    readonly live: {
      readonly playing: 'A’ cluich beò';
      readonly seekToEdge: 'Tèarmann gu beò';
      readonly badge: 'Beò';
    };
    readonly cast: {
      readonly start: 'Tòisich air tar-chur';
      readonly stop: 'Cuir stad air tar-chur';
      readonly connecting: 'A’ ceangal';
    };
    readonly airplay: {
      readonly start: 'Tòisich AirPlay';
      readonly stop: 'Cuir stad air AirPlay';
    };
    readonly slider: {
      readonly seek: 'Lorg';
    };
    readonly time: {
      readonly current: 'An ùine làithreach';
      readonly duration: 'Faide';
      readonly remaining: 'An ùine air fhàgail';
      readonly remainingSuffix: '{duration} air fhàgail';
      readonly showElapsed: '{duration}. Seall an ùine a chaidh seachad.';
      readonly showDuration: '{duration}. Seall an ùine iomlan.';
      readonly showRemaining: '{duration}. Seall an ùine air fhàgail.';
      readonly position: '{current} à {duration}';
    };
    readonly playback: {
      readonly rate: 'Reat cluich {rate}';
    };
    readonly volume: {
      readonly mutedValue: '{percent}, air mùchadh';
      readonly muted: 'Air mùchadh';
      readonly label: 'Àirde na fuaime';
      readonly value: 'Àirde na fuaime {value}';
    };
    readonly status: {
      readonly captionsOn: 'Caipseanan air';
      readonly captionsOff: 'Caipseanan dheth';
      readonly paused: 'Air stad';
      readonly playing: 'A’ cluich';
      readonly fullscreen: 'Làn-sgrìn';
      readonly pip: 'Dealbh beag anns a’ dealbh mhòr';
      readonly exitPip: 'Fàg dealbh beag';
      readonly seekedTo: 'Air a leum gu {time}';
    };
    readonly container: {
      readonly label: 'Cluicheadair mheadhanan';
    };
    readonly errors: {
      readonly aborted: 'Sguir thu de chluich a’ mheadhain';
      readonly network: 'Cha deach leinn an còrr dhen mheadhan a luchdadh a-nuas ri linn mearachd lìonraidh.';
      readonly decode: 'Sguir sinn de chluich a’ mheadhain – dh’fhaoidte gu bheil e coirbte no gu bheil gleus aig a’ mheadhan nach cuir am brabhsair taic ris.';
      readonly source: 'Cha b’ urrainn dhuinn am meadhan a luchdadh – dh’fhaoidte gun do dh’fhàillig leis an fhrithealaiche no an lìonra no nach cuir sinn taic ris an fhòrmat.';
      readonly encrypted: 'Tha am meadhan crioptaichte ’s chan eil iuchair dì-chrioptachaidh againn dha.';
      readonly title: 'Chaidh rudeigin ceàrr.';
      readonly unexpected: 'Thachair mearachd. Feuch ris a-rithist.';
    };
    readonly common: {
      readonly empty: '';
      readonly ok: 'Dùin';
    };
    readonly menu: {
      readonly settings: 'Roghainnean';
      readonly quality: 'Càileachd';
      readonly audio: 'Fuaim';
      readonly default: 'Bunaiteach';
      readonly speed: 'Astar';
      readonly captions: 'Caipseanan';
      readonly playbackRate: 'Reat cluich';
      readonly back: 'Air ais';
      readonly off: 'Dheth';
      readonly auto: 'Fèin-obrachail';
      readonly autoWithLabel: 'Fèin-obrachail ({label})';
      readonly subtitles: 'Fo-thiotalan';
    };
  };
  readonly gl: {
    readonly buttons: {
      readonly play: 'Reproducir';
      readonly pause: 'Pausa';
      readonly replay: 'Repetir';
      readonly mute: 'Silenciar';
      readonly unmute: 'Son activado';
    };
    readonly seek: {
      readonly forward: 'Avanzar {seconds} segundos';
      readonly backward: 'Retroceder {seconds} segundos';
    };
    readonly fullscreen: {
      readonly enter: 'Pantalla completa';
      readonly exit: 'Saír da pantalla completa';
    };
    readonly captions: {
      readonly enable: 'Activar subtítulos';
      readonly disable: 'Desactivar subtítulos';
    };
    readonly pip: {
      readonly enter: 'Imaxe en imaxe';
      readonly exit: 'Saír de imaxe en imaxe';
    };
    readonly live: {
      readonly playing: 'Reproducindo en directo';
      readonly seekToEdge: 'Ir ao directo';
      readonly badge: 'En directo';
    };
    readonly cast: {
      readonly start: 'Iniciar emisión';
      readonly stop: 'Deter emisión';
      readonly connecting: 'Conectando';
    };
    readonly airplay: {
      readonly start: 'Iniciar AirPlay';
      readonly stop: 'Deter AirPlay';
    };
    readonly slider: {
      readonly seek: 'Buscar';
    };
    readonly time: {
      readonly current: 'Tempo reproducido';
      readonly duration: 'Duración';
      readonly remaining: 'Tempo restante';
      readonly remainingSuffix: 'Quedan {duration}';
      readonly showElapsed: '{duration}. Amosar tempo transcorrido.';
      readonly showDuration: '{duration}. Amosar duración.';
      readonly showRemaining: '{duration}. Amosar tempo restante.';
      readonly position: '{current} de {duration}';
    };
    readonly playback: {
      readonly rate: 'Velocidade de reprodución {rate}';
    };
    readonly volume: {
      readonly mutedValue: '{percent}, silenciado';
      readonly muted: 'Silenciado';
      readonly label: 'Nivel do volume';
      readonly value: 'Nivel do volume {value}';
    };
    readonly status: {
      readonly captionsOn: 'Subtítulos activados';
      readonly captionsOff: 'Subtítulos desactivados';
      readonly paused: 'En pausa';
      readonly playing: 'Reproducindo';
      readonly fullscreen: 'Pantalla completa';
      readonly pip: 'Imaxe en imaxe';
      readonly exitPip: 'Saír de imaxe en imaxe';
      readonly seekedTo: 'Saltouse a {time}';
    };
    readonly container: {
      readonly label: 'Reprodutor multimedia';
    };
    readonly errors: {
      readonly aborted: 'Vostede interrompeu a reprodución do medio.';
      readonly network: 'Un erro de rede interrompeu a descarga do medio.';
      readonly decode: 'Interrompeuse a reprodución do medio por mor dun problema de estragamento dos datos ou porque o medio precisa funcións que o seu navegador non ofrece.';
      readonly source: 'Non foi posíbel cargar o medio por mor dun fallo de rede ou do servidor ou porque o formato non é compatíbel.';
      readonly encrypted: 'O medio está cifrado e non temos as chaves para descifralo.';
      readonly title: 'Algo saíu mal.';
      readonly unexpected: 'Produciuse un erro. Por favor, ténteo de novo.';
    };
    readonly common: {
      readonly empty: '';
      readonly ok: 'Pechar';
    };
    readonly menu: {
      readonly settings: 'Axustes';
      readonly quality: 'Calidade';
      readonly audio: 'Son';
      readonly default: 'Predeterminado';
      readonly speed: 'Velocidade';
      readonly captions: 'Subtítulos para xordos';
      readonly playbackRate: 'Velocidade de reprodución';
      readonly back: 'Atrás';
      readonly off: 'Desactivado';
      readonly auto: 'Automático';
      readonly autoWithLabel: 'Automático ({label})';
      readonly subtitles: 'Subtítulos';
    };
  };
  readonly he: {
    readonly buttons: {
      readonly play: 'נַגֵּן';
      readonly pause: 'השהה';
      readonly replay: 'נַגֵּן שוב';
      readonly mute: 'השתק';
      readonly unmute: 'בטל השתקה';
    };
    readonly seek: {
      readonly forward: 'דילוג קדימה {seconds} שניות';
      readonly backward: 'דילוג אחורה {seconds} שניות';
    };
    readonly fullscreen: {
      readonly enter: 'מסך מלא';
      readonly exit: 'יציאה ממסך מלא';
    };
    readonly captions: {
      readonly enable: 'הפעל כתוביות';
      readonly disable: 'כבה כתוביות';
    };
    readonly pip: {
      readonly enter: 'תמונה בתוך תמונה';
      readonly exit: 'יציאה מתמונה בתוך תמונה';
    };
    readonly live: {
      readonly playing: 'משדר חי';
      readonly seekToEdge: 'עבור לשידור חי';
      readonly badge: 'שידור חי';
    };
    readonly cast: {
      readonly start: 'התחל שידור';
      readonly stop: 'עצור שידור';
      readonly connecting: 'מתחבר';
    };
    readonly airplay: {
      readonly start: 'הפעלת AirPlay';
      readonly stop: 'עצירת AirPlay';
    };
    readonly slider: {
      readonly seek: 'חיפוש';
    };
    readonly time: {
      readonly current: 'זמן נוכחי';
      readonly duration: 'זמן כולל';
      readonly remaining: 'זמן נותר';
      readonly remainingSuffix: 'נותרו {duration}';
      readonly showElapsed: '{duration}. הצג זמן שחלף.';
      readonly showDuration: '{duration}. הצג משך.';
      readonly showRemaining: '{duration}. הצג זמן שנותר.';
      readonly position: '{current} מתוך {duration}';
    };
    readonly playback: {
      readonly rate: 'קצב ניגון {rate}';
    };
    readonly volume: {
      readonly mutedValue: '{percent}, מושתק';
      readonly muted: 'מושתק';
      readonly label: 'עוצמת קול';
      readonly value: 'עוצמת קול {value}';
    };
    readonly status: {
      readonly captionsOn: 'כיתובים פועלים';
      readonly captionsOff: 'כיתובים כבויים';
      readonly paused: 'מושהה';
      readonly playing: 'מתנגן';
      readonly fullscreen: 'מסך מלא';
      readonly pip: 'תמונה בתוך תמונה';
      readonly exitPip: 'יציאה מתמונה בתוך תמונה';
      readonly seekedTo: 'דילוג אל {time}';
    };
    readonly container: {
      readonly label: 'נגן מדיה';
    };
    readonly errors: {
      readonly aborted: 'ביטלת את השמעת המדיה';
      readonly network: 'שגיאת רשת גרמה להורדת המדיה להיכשל באמצע.';
      readonly decode: 'השמעת המדיה בוטלה בשל בעית השחטת מידע או מכיוון שהמדיה עשתה שימוש בתכונות שהדפדפן שלך לא תמך בהן.';
      readonly source: 'לא ניתן לטעון את המדיה, או מכיוון שהרשת או השרת כשלו או מכיוון שהפורמט אינו נתמך.';
      readonly encrypted: 'המדיה מוצפנת ואין בידינו את המפתח כדי לפענח אותה.';
      readonly title: 'אירעה שגיאה.';
      readonly unexpected: 'אירעה שגיאה. אנא נסה שוב.';
    };
    readonly common: {
      readonly empty: '';
      readonly ok: 'סְגוֹר';
    };
    readonly menu: {
      readonly settings: 'הגדרות';
      readonly quality: 'איכות';
      readonly audio: 'שמע';
      readonly default: 'ברירת מחדל';
      readonly speed: 'מהירות';
      readonly captions: 'כתוביות';
      readonly playbackRate: 'קצב ניגון';
      readonly back: 'חזרה';
      readonly off: 'כבוי';
      readonly auto: 'אוטומטי';
      readonly autoWithLabel: 'אוטומטי ({label})';
      readonly subtitles: 'כתוביות';
    };
  };
  readonly hi: {
    readonly buttons: {
      readonly play: 'चलाएँ';
      readonly pause: 'रोकें';
      readonly replay: 'फिर से चलाएँ';
      readonly mute: 'म्यूट करें';
      readonly unmute: 'अनम्यूट करें';
    };
    readonly seek: {
      readonly forward: '{seconds} सेकंड आगे बढ़ें';
      readonly backward: '{seconds} सेकंड पीछे जाएं';
    };
    readonly fullscreen: {
      readonly enter: 'फ़ुल स्क्रीन';
      readonly exit: 'पूर्ण स्क्रीन से बाहर';
    };
    readonly captions: {
      readonly enable: 'कैप्शन चालू करें';
      readonly disable: 'कैप्शन बंद करें';
    };
    readonly pip: {
      readonly enter: 'पिक्चर-इन-पिक्चर';
      readonly exit: 'पिक्चर-इन-पिक्चर से बाहर निकलें';
    };
    readonly live: {
      readonly playing: 'लाइव चल रहा है';
      readonly seekToEdge: 'लाइव पर जाएँ';
      readonly badge: 'लाइव';
    };
    readonly cast: {
      readonly start: 'कास्टिंग शुरू करें';
      readonly stop: 'कास्टिंग बंद करें';
      readonly connecting: 'कनेक्ट हो रहा है';
    };
    readonly airplay: {
      readonly start: 'AirPlay शुरू करें';
      readonly stop: 'AirPlay रोकें';
    };
    readonly slider: {
      readonly seek: 'खोजें';
    };
    readonly time: {
      readonly current: 'वर्तमान समय';
      readonly duration: 'अवधि';
      readonly remaining: 'शेष समय';
      readonly remainingSuffix: '{duration} शेष';
      readonly showElapsed: '{duration}. बीता समय दिखाएँ.';
      readonly showDuration: '{duration}. अवधि दिखाएँ.';
      readonly showRemaining: '{duration}. शेष समय दिखाएँ.';
      readonly position: '{duration} में से {current}';
    };
    readonly playback: {
      readonly rate: 'चलाने की दर {rate}';
    };
    readonly volume: {
      readonly mutedValue: '{percent}, म्यूट';
      readonly muted: 'म्यूट';
      readonly label: 'वॉल्यूम';
      readonly value: 'वॉल्यूम {value}';
    };
    readonly status: {
      readonly captionsOn: 'कैप्शन चालू';
      readonly captionsOff: 'कैप्शन बंद';
      readonly paused: 'रोका गया';
      readonly playing: 'चल रहा है';
      readonly fullscreen: 'पूर्ण स्क्रीन';
      readonly pip: 'पिक्चर में पिक्चर';
      readonly exitPip: 'पिक्चर में पिक्चर से बाहर';
      readonly seekedTo: '{time} पर पहुँचा';
    };
    readonly container: {
      readonly label: 'मीडिया प्लेयर';
    };
    readonly errors: {
      readonly aborted: 'आपने मीडिया प्लेबैक को रोक दिया';
      readonly network: 'एक नेटवर्क त्रुटि के कारण मीडिया डाउनलोड आंशिक रूप से विफल हो गया।';
      readonly decode: 'मीडिया प्लेबैक निरस्त कर दिया गया, कारण: दूषण की समस्या या मीडिया ने उन सुविधाओं का उपयोग किया था जिनका आपके ब्राउज़र ने समर्थन नहीं किया।';
      readonly source: 'मीडिया लोड नहीं किया जा सका, या तो सर्वर या नेटवर्क विफल होने के कारण या प्रारूप समर्थित नहीं होने के कारण।';
      readonly encrypted: 'मीडिया एन्क्रिप्टेड है और हमारे पास इसे डिक्रिप्ट करने की चाबी नहीं है।';
      readonly title: 'कुछ गलत हुआ।';
      readonly unexpected: 'एक त्रुटि हुई। कृपया पुनः प्रयास करें।';
    };
    readonly common: {
      readonly empty: '';
      readonly ok: 'बंद करें';
    };
    readonly menu: {
      readonly settings: 'सेटिंग्स';
      readonly quality: 'गुणवत्ता';
      readonly audio: 'ऑडियो';
      readonly default: 'डिफ़ॉल्ट';
      readonly speed: 'गति';
      readonly captions: 'कैप्शन';
      readonly playbackRate: 'प्लेबैक दर';
      readonly back: 'वापस';
      readonly off: 'बंद';
      readonly auto: 'ऑटो';
      readonly autoWithLabel: 'ऑटो ({label})';
      readonly subtitles: 'उपशीर्षक';
    };
  };
  readonly hr: {
    readonly buttons: {
      readonly play: 'Pusti';
      readonly pause: 'Pauza';
      readonly replay: 'Ponovi';
      readonly mute: 'Prigušen';
      readonly unmute: 'Ne-prigušen';
    };
    readonly seek: {
      readonly forward: 'Preskoči naprijed {seconds} sekundi';
      readonly backward: 'Preskoči unatrag {seconds} sekundi';
    };
    readonly fullscreen: {
      readonly enter: 'Puni ekran';
      readonly exit: 'Izađi iz cijelog zaslona';
    };
    readonly captions: {
      readonly enable: 'Uključi titlove';
      readonly disable: 'Isključi titlove';
    };
    readonly pip: {
      readonly enter: 'Slika u slici';
      readonly exit: 'Izađi iz slike u slici';
    };
    readonly live: {
      readonly playing: 'Reprodukcija uživo';
      readonly seekToEdge: 'Prijeđi na live';
      readonly badge: 'Uživo';
    };
    readonly cast: {
      readonly start: 'Pokreni emitiranje';
      readonly stop: 'Zaustavi emitiranje';
      readonly connecting: 'Povezivanje';
    };
    readonly airplay: {
      readonly start: 'Pokreni AirPlay';
      readonly stop: 'Zaustavi AirPlay';
    };
    readonly slider: {
      readonly seek: 'Premotavanje';
    };
    readonly time: {
      readonly current: 'Trenutno vrijeme';
      readonly duration: 'Vrijeme trajanja';
      readonly remaining: 'Preostalo vrijeme';
      readonly remainingSuffix: 'Preostalo {duration}';
      readonly showElapsed: '{duration}. Prikaži proteklo vrijeme.';
      readonly showDuration: '{duration}. Prikaži trajanje.';
      readonly showRemaining: '{duration}. Prikaži preostalo vrijeme.';
      readonly position: '{current} od {duration}';
    };
    readonly playback: {
      readonly rate: 'Stopa reprodukcije {rate}';
    };
    readonly volume: {
      readonly mutedValue: '{percent}, utišano';
      readonly muted: 'Utišano';
      readonly label: 'Glasnoća';
      readonly value: 'Glasnoća {value}';
    };
    readonly status: {
      readonly captionsOn: 'Titlovi uključeni';
      readonly captionsOff: 'Titlovi isključeni';
      readonly paused: 'Pauzirano';
      readonly playing: 'Reproducira se';
      readonly fullscreen: 'Cijeli zaslon';
      readonly pip: 'Slika u slici';
      readonly exitPip: 'Izađi iz slike u slici';
      readonly seekedTo: 'Premotano na {time}';
    };
    readonly container: {
      readonly label: 'Medijski reproduktor';
    };
    readonly errors: {
      readonly aborted: 'Isključili ste reprodukciju videa.';
      readonly network: 'Video se prestao preuzimati zbog greške na mreži.';
      readonly decode: 'Reprodukcija videa je zaustavljenja zbog greške u formatu ili zbog verzije vašeg pretraživača.';
      readonly source: 'Video se ne može reproducirati zbog servera, greške u mreži ili je format ne podržan.';
      readonly encrypted: 'Medij je šifriran i nema ključeva za dešifriranje.';
      readonly title: 'Nešto je pošlo po zlu.';
      readonly unexpected: 'Došlo je do pogreške. Pokušajte ponovo.';
    };
    readonly common: {
      readonly empty: '';
      readonly ok: 'Zatvori';
    };
    readonly menu: {
      readonly settings: 'Postavke';
      readonly quality: 'Kvaliteta';
      readonly audio: 'Zvuk';
      readonly default: 'Zadano';
      readonly speed: 'Brzina';
      readonly captions: 'Titlovi';
      readonly playbackRate: 'Brzina reprodukcije';
      readonly back: 'Natrag';
      readonly off: 'Isključeno';
      readonly auto: 'Automatski';
      readonly autoWithLabel: 'Automatski ({label})';
      readonly subtitles: 'Titlovi';
    };
  };
  readonly hu: {
    readonly buttons: {
      readonly play: 'Lejátszás';
      readonly pause: 'Szünet';
      readonly replay: 'Visszajátszás';
      readonly mute: 'Némítás';
      readonly unmute: 'Némítás kikapcsolva';
    };
    readonly seek: {
      readonly forward: 'Ugrás előre {seconds} másodpercet';
      readonly backward: 'Ugrás vissza {seconds} másodpercet';
    };
    readonly fullscreen: {
      readonly enter: 'Teljes képernyő';
      readonly exit: 'Kilépés teljes képernyőből';
    };
    readonly captions: {
      readonly enable: 'Feliratok bekapcsolása';
      readonly disable: 'Feliratok kikapcsolása';
    };
    readonly pip: {
      readonly enter: 'Kép a képben';
      readonly exit: 'Kilépés kép a képben módból';
    };
    readonly live: {
      readonly playing: 'Élő adás';
      readonly seekToEdge: 'Ugrás az élő adáshoz';
      readonly badge: 'Élő';
    };
    readonly cast: {
      readonly start: 'Vetítés indítása';
      readonly stop: 'Vetítés leállítása';
      readonly connecting: 'Csatlakozás';
    };
    readonly airplay: {
      readonly start: 'AirPlay indítása';
      readonly stop: 'AirPlay leállítása';
    };
    readonly slider: {
      readonly seek: 'Teke';
    };
    readonly time: {
      readonly current: 'Aktuális időpont';
      readonly duration: 'Hossz';
      readonly remaining: 'Hátralévő idő';
      readonly remainingSuffix: '{duration} van hátra';
      readonly showElapsed: '{duration}. Eltelt idő megjelenítése.';
      readonly showDuration: '{duration}. Időtartam megjelenítése.';
      readonly showRemaining: '{duration}. Hátralévő idő megjelenítése.';
      readonly position: '{current} / {duration}';
    };
    readonly playback: {
      readonly rate: 'Lejátszási sebesség {rate}';
    };
    readonly volume: {
      readonly mutedValue: '{percent}, némítva';
      readonly muted: 'Némítva';
      readonly label: 'Hangerő';
      readonly value: 'Hangerő {value}';
    };
    readonly status: {
      readonly captionsOn: 'Feliratok bekapcsolva';
      readonly captionsOff: 'Feliratok kikapcsolva';
      readonly paused: 'Szüneteltetve';
      readonly playing: 'Lejátszás';
      readonly fullscreen: 'Teljes képernyő';
      readonly pip: 'Kép a képben';
      readonly exitPip: 'Kilépés kép a képben módból';
      readonly seekedTo: 'Ugrás ide: {time}';
    };
    readonly container: {
      readonly label: 'Médialejátszó';
    };
    readonly errors: {
      readonly aborted: 'Leállította a lejátszást';
      readonly network: 'Hálózati hiba miatt a videó részlegesen töltődött le.';
      readonly decode: 'A lejátszás adatsérülés miatt leállt, vagy a videó egyes tulajdonságait a böngészője nem támogatja.';
      readonly source: 'A videó nem tölthető be hálózati vagy kiszolgálói hiba miatt, vagy a formátuma nem támogatott.';
      readonly encrypted: 'A média titkosítva van és nincsenek kulcsok a visszafejtéshez.';
      readonly title: 'Valami hiba történt.';
      readonly unexpected: 'Hiba történt. Kérjük, próbálja újra.';
    };
    readonly common: {
      readonly empty: '';
      readonly ok: 'Bezárás';
    };
    readonly menu: {
      readonly settings: 'Beállítások';
      readonly quality: 'Minőség';
      readonly audio: 'Hang';
      readonly default: 'Alapértelmezett';
      readonly speed: 'Sebesség';
      readonly captions: 'Feliratok';
      readonly playbackRate: 'Lejátszási sebesség';
      readonly back: 'Vissza';
      readonly off: 'Ki';
      readonly auto: 'Automatikus';
      readonly autoWithLabel: 'Automatikus ({label})';
      readonly subtitles: 'Feliratok';
    };
  };
  readonly it: {
    readonly buttons: {
      readonly play: 'Riproduci';
      readonly pause: 'Pausa';
      readonly replay: 'Riproduci di nuovo';
      readonly mute: 'Disattiva l’audio';
      readonly unmute: 'Attiva l’audio';
    };
    readonly seek: {
      readonly forward: 'Avanti {seconds} secondi';
      readonly backward: 'Indietro {seconds} secondi';
    };
    readonly fullscreen: {
      readonly enter: 'Schermo intero';
      readonly exit: 'Esci da schermo intero';
    };
    readonly captions: {
      readonly enable: 'Attiva sottotitoli';
      readonly disable: 'Disattiva sottotitoli';
    };
    readonly pip: {
      readonly enter: 'Picture-in-Picture';
      readonly exit: 'Esci dalla modalità Picture-in-Picture';
    };
    readonly live: {
      readonly playing: 'Riproduzione in diretta';
      readonly seekToEdge: 'Vai al live';
      readonly badge: 'In diretta';
    };
    readonly cast: {
      readonly start: 'Avvia trasmissione';
      readonly stop: 'Interrompi trasmissione';
      readonly connecting: 'Connessione';
    };
    readonly airplay: {
      readonly start: 'Avvia AirPlay';
      readonly stop: 'Arresta AirPlay';
    };
    readonly slider: {
      readonly seek: 'Scorrimento';
    };
    readonly time: {
      readonly current: 'Orario attuale';
      readonly duration: 'Durata';
      readonly remaining: 'Tempo rimanente';
      readonly remainingSuffix: 'Restano {duration}';
      readonly showElapsed: '{duration}. Mostra tempo trascorso.';
      readonly showDuration: '{duration}. Mostra durata.';
      readonly showRemaining: '{duration}. Mostra tempo rimanente.';
      readonly position: '{current} di {duration}';
    };
    readonly playback: {
      readonly rate: 'Velocità di riproduzione {rate}';
    };
    readonly volume: {
      readonly mutedValue: '{percent}, audio disattivato';
      readonly muted: 'Audio disattivato';
      readonly label: 'Livello del volume';
      readonly value: 'Livello del volume {value}';
    };
    readonly status: {
      readonly captionsOn: 'Sottotitoli attivi';
      readonly captionsOff: 'Sottotitoli disattivi';
      readonly paused: 'In pausa';
      readonly playing: 'In riproduzione';
      readonly fullscreen: 'Schermo intero';
      readonly pip: 'Picture-in-picture';
      readonly exitPip: 'Esci dalla modalità Picture-in-picture';
      readonly seekedTo: 'Posizione di riproduzione: {time}';
    };
    readonly container: {
      readonly label: 'Lettore multimediale';
    };
    readonly errors: {
      readonly aborted: 'La riproduzione del contenuto multimediale è stata interrotta.';
      readonly network: 'Il download del contenuto multimediale è stato interrotto a causa di un problema rete.';
      readonly decode: 'La riproduzione del contenuto multimediale è stata interrotta a causa di un file danneggiato o per l’utilizzo di impostazioni non supportate dal browser.';
      readonly source: 'Il contenuto multimediale non può essere caricato a causa di un errore nel server o nella rete o perché il formato non viene supportato.';
      readonly encrypted: 'Il contenuto multimediale è criptato e non disponiamo delle chiavi per decifrarlo.';
      readonly title: 'Qualcosa è andato storto.';
      readonly unexpected: 'Si è verificato un errore. Riprova.';
    };
    readonly common: {
      readonly empty: '';
      readonly ok: 'Chiudi';
    };
    readonly menu: {
      readonly settings: 'Impostazioni';
      readonly quality: 'Qualità';
      readonly audio: 'Audio';
      readonly default: 'Predefinito';
      readonly speed: 'Velocità';
      readonly captions: 'Sottotitoli';
      readonly playbackRate: 'Velocità di riproduzione';
      readonly back: 'Indietro';
      readonly off: 'Disattivato';
      readonly auto: 'Auto';
      readonly autoWithLabel: 'Auto ({label})';
      readonly subtitles: 'Sottotitoli';
    };
  };
  readonly ja: {
    readonly buttons: {
      readonly play: '再生';
      readonly pause: '一時停止';
      readonly replay: 'もう一度見る';
      readonly mute: 'ミュート';
      readonly unmute: 'サウンドをオン';
    };
    readonly seek: {
      readonly forward: '{seconds}秒進む';
      readonly backward: '{seconds}秒戻る';
    };
    readonly fullscreen: {
      readonly enter: 'フルスクリーン';
      readonly exit: '全画面表示解除';
    };
    readonly captions: {
      readonly enable: '字幕を表示';
      readonly disable: '字幕を非表示';
    };
    readonly pip: {
      readonly enter: 'ピクチャーインピクチャー';
      readonly exit: 'ピクチャーインピクチャー機能の終了';
    };
    readonly live: {
      readonly playing: 'ライブ再生中';
      readonly seekToEdge: 'ライブ位置へ移動';
      readonly badge: 'ライブ';
    };
    readonly cast: {
      readonly start: 'キャスト開始';
      readonly stop: 'キャスト停止';
      readonly connecting: '接続中';
    };
    readonly airplay: {
      readonly start: 'AirPlayを開始';
      readonly stop: 'AirPlayを停止';
    };
    readonly slider: {
      readonly seek: 'シーク';
    };
    readonly time: {
      readonly current: '現在の時間';
      readonly duration: '長さ';
      readonly remaining: '残りの時間';
      readonly remainingSuffix: '残り {duration}';
      readonly showElapsed: '{duration}. 経過時間を表示.';
      readonly showDuration: '{duration}. 再生時間を表示.';
      readonly showRemaining: '{duration}. 残り時間を表示.';
      readonly position: '{duration}の{current}';
    };
    readonly playback: {
      readonly rate: '再生レート {rate}';
    };
    readonly volume: {
      readonly mutedValue: '{percent}、ミュート';
      readonly muted: 'ミュート';
      readonly label: '音量';
      readonly value: '音量 {value}';
    };
    readonly status: {
      readonly captionsOn: '字幕オン';
      readonly captionsOff: '字幕オフ';
      readonly paused: '一時停止';
      readonly playing: '再生中';
      readonly fullscreen: '全画面表示';
      readonly pip: 'ピクチャーインピクチャー表示';
      readonly exitPip: 'ピクチャーインピクチャー表示解除';
      readonly seekedTo: '{time}に移動しました';
    };
    readonly container: {
      readonly label: 'メディアプレイヤー';
    };
    readonly errors: {
      readonly aborted: '動画再生を中止しました';
      readonly network: 'ネットワーク エラーにより動画のダウンロードが途中で失敗しました';
      readonly decode: '破損の問題、またはお使いのブラウザがサポートしていない機能が動画に使用されていたため、動画の再生が中止されました';
      readonly source: 'サーバーまたはネットワークのエラー、またはフォーマットがサポートされていないため、動画をロードできませんでした';
      readonly encrypted: 'メディアは暗号化されており、解読するためのキーがありません。';
      readonly title: '問題が発生しました。';
      readonly unexpected: 'エラーが発生しました。再度お試しください。';
    };
    readonly common: {
      readonly empty: '';
      readonly ok: '閉じる';
    };
    readonly menu: {
      readonly settings: '設定';
      readonly quality: '画質';
      readonly audio: '音声';
      readonly default: 'デフォルト';
      readonly speed: '速度';
      readonly captions: 'キャプション';
      readonly playbackRate: '再生速度';
      readonly back: '戻る';
      readonly off: 'オフ';
      readonly auto: '自動';
      readonly autoWithLabel: '自動 ({label})';
      readonly subtitles: '字幕';
    };
  };
  readonly ko: {
    readonly buttons: {
      readonly play: '재생';
      readonly pause: '일시중지';
      readonly replay: '다시 재생';
      readonly mute: '음소거';
      readonly unmute: '소리 활성화하기';
    };
    readonly seek: {
      readonly forward: '{seconds}초 앞으로';
      readonly backward: '{seconds}초 뒤로';
    };
    readonly fullscreen: {
      readonly enter: '전체 화면';
      readonly exit: '전체 화면 종료';
    };
    readonly captions: {
      readonly enable: '자막 켜기';
      readonly disable: '자막 끄기';
    };
    readonly pip: {
      readonly enter: '화면 속 화면';
      readonly exit: '화면 속 화면 종료';
    };
    readonly live: {
      readonly playing: '라이브 재생 중';
      readonly seekToEdge: '라이브 지점으로 이동';
      readonly badge: '라이브';
    };
    readonly cast: {
      readonly start: '전송 시작';
      readonly stop: '전송 중지';
      readonly connecting: '연결 중';
    };
    readonly airplay: {
      readonly start: 'AirPlay 시작';
      readonly stop: 'AirPlay 중지';
    };
    readonly slider: {
      readonly seek: '탐색';
    };
    readonly time: {
      readonly current: '현재 시간';
      readonly duration: '지정 기간';
      readonly remaining: '남은 시간';
      readonly remainingSuffix: '{duration} 남음';
      readonly showElapsed: '{duration}. 경과 시간 표시.';
      readonly showDuration: '{duration}. 길이 표시.';
      readonly showRemaining: '{duration}. 남은 시간 표시.';
      readonly position: '{duration} 중 {current}';
    };
    readonly playback: {
      readonly rate: '재생 속도 {rate}';
    };
    readonly volume: {
      readonly mutedValue: '{percent}, 음소거';
      readonly muted: '음소거';
      readonly label: '볼륨';
      readonly value: '볼륨 {value}';
    };
    readonly status: {
      readonly captionsOn: '자막 켜짐';
      readonly captionsOff: '자막 꺼짐';
      readonly paused: '일시정지';
      readonly playing: '재생 중';
      readonly fullscreen: '전체 화면';
      readonly pip: '화면 속 화면';
      readonly exitPip: '화면 속 화면 종료';
      readonly seekedTo: '이동 위치: {time}';
    };
    readonly container: {
      readonly label: '미디어 플레이어';
    };
    readonly errors: {
      readonly aborted: '비디오 재생을 취소했습니다.';
      readonly network: '네트워크 오류로 인하여 비디오 일부를 다운로드하지 못 했습니다.';
      readonly decode: '비디오 재생이 취소됐습니다. 비디오가 손상되었거나 비디오가 사용하는 기능을 브라우저에서 지원하지 않는 것 같습니다.';
      readonly source: '비디오를 로드할 수 없습니다. 서버 혹은 네트워크 오류 때문이거나 지원되지 않는 형식 때문일 수 있습니다.';
      readonly encrypted: '미디어는 암호화되어 있으며 이를 해독할 키를 갖고 있지 않습니다.';
      readonly title: '문제가 발생했습니다.';
      readonly unexpected: '오류가 발생했습니다. 다시 시도해 주세요.';
    };
    readonly common: {
      readonly empty: '';
      readonly ok: '닫기';
    };
    readonly menu: {
      readonly settings: '설정';
      readonly quality: '품질';
      readonly audio: '오디오';
      readonly default: '기본값';
      readonly speed: '속도';
      readonly captions: '캡션';
      readonly playbackRate: '재생 속도';
      readonly back: '뒤로';
      readonly off: '끄기';
      readonly auto: '자동';
      readonly autoWithLabel: '자동 ({label})';
      readonly subtitles: '자막';
    };
  };
  readonly lv: {
    readonly buttons: {
      readonly play: 'Atskaņot';
      readonly pause: 'Pauzēt';
      readonly replay: 'Atkārtot';
      readonly mute: 'Izslēgt skaņu';
      readonly unmute: 'Ieslēgt skaņu';
    };
    readonly seek: {
      readonly forward: 'Pārtīt uz priekšu {seconds} sekundes';
      readonly backward: 'Pārtīt atpakaļ {seconds} sekundes';
    };
    readonly fullscreen: {
      readonly enter: 'Pilnekrāna režīms';
      readonly exit: 'Iziet no pilnekrāna';
    };
    readonly captions: {
      readonly enable: 'Ieslēgt parakstus';
      readonly disable: 'Izslēgt parakstus';
    };
    readonly pip: {
      readonly enter: 'Attēls attēlā';
      readonly exit: 'Iziet no attēls attēlā';
    };
    readonly live: {
      readonly playing: 'Tiešraide';
      readonly seekToEdge: 'Pāriet uz tiešraidi';
      readonly badge: 'Tiešraide';
    };
    readonly cast: {
      readonly start: 'Sākt pārraidīšanu';
      readonly stop: 'Beigt pārraidīšanu';
      readonly connecting: 'Savienošanās';
    };
    readonly airplay: {
      readonly start: 'Sākt AirPlay';
      readonly stop: 'Apturēt AirPlay';
    };
    readonly slider: {
      readonly seek: 'Meklēt';
    };
    readonly time: {
      readonly current: 'Esošais laiks';
      readonly duration: 'Ilgums';
      readonly remaining: 'Atlikušais laiks';
      readonly remainingSuffix: 'Atlicis {duration}';
      readonly showElapsed: '{duration}. Rādīt pagājušo laiku.';
      readonly showDuration: '{duration}. Rādīt ilgumu.';
      readonly showRemaining: '{duration}. Rādīt atlikušo laiku.';
      readonly position: '{current} no {duration}';
    };
    readonly playback: {
      readonly rate: 'Atskaņošanas ātrums {rate}';
    };
    readonly volume: {
      readonly mutedValue: '{percent}, izslēgts';
      readonly muted: 'Skaņa izslēgta';
      readonly label: 'Skaļums';
      readonly value: 'Skaļums {value}';
    };
    readonly status: {
      readonly captionsOn: 'Paraksti ieslēgti';
      readonly captionsOff: 'Paraksti izslēgti';
      readonly paused: 'Pauzēts';
      readonly playing: 'Atskaņo';
      readonly fullscreen: 'Pilnekrāna režīms';
      readonly pip: 'Attēls attēlā';
      readonly exitPip: 'Iziet no attēls attēlā';
      readonly seekedTo: 'Pārlēkts uz {time}';
    };
    readonly container: {
      readonly label: 'Multivides atskaņotājs';
    };
    readonly errors: {
      readonly aborted: 'Atskaņošana atcelta';
      readonly network: 'Tīkla kļūdas dēļ, multivides lejupielāde neizdevās.';
      readonly decode: 'Atskaņošana tika pārtraukta tīkla kļūmes dēļ vai pārlūkprogrammas iespēju trūkuma dēļ.';
      readonly source: 'Neizdevās ielādēt multividi, iespējams severa, vai tīkla kļūmes dēļ, vai neatbalstīta formāta dēļ.';
      readonly encrypted: 'Multividi nevar atskaņot, jo tas ir kriptēts un nav pieejama dekriptēšanas atslēga.';
      readonly title: 'Kaut kas nogāja greizi.';
      readonly unexpected: 'Radās kļūda. Lūdzu, mēģiniet vēlreiz.';
    };
    readonly common: {
      readonly empty: '';
      readonly ok: 'Aizvērt';
    };
    readonly menu: {
      readonly settings: 'Iestatījumi';
      readonly quality: 'Kvalitāte';
      readonly audio: 'Skaņa';
      readonly default: 'Noklusējuma';
      readonly speed: 'Ātrums';
      readonly captions: 'Subtitri';
      readonly playbackRate: 'Atskaņošanas ātrums';
      readonly back: 'Atpakaļ';
      readonly off: 'Izslēgts';
      readonly auto: 'Automātiski';
      readonly autoWithLabel: 'Automātiski ({label})';
      readonly subtitles: 'Subtitri';
    };
  };
  readonly mr: {
    readonly buttons: {
      readonly play: 'वाजवा';
      readonly pause: 'थांबा';
      readonly replay: 'पुन्हा वाजवा';
      readonly mute: 'म्यूट करा';
      readonly unmute: 'अनम्यूट करा';
    };
    readonly seek: {
      readonly forward: 'पुढे जा {seconds} सेकंद';
      readonly backward: 'मागे जा {seconds} सेकंद';
    };
    readonly fullscreen: {
      readonly enter: 'संपूर्ण पडदा';
      readonly exit: 'संपूर्ण पडद्यातून बाहेर';
    };
    readonly captions: {
      readonly enable: 'मथळे';
      readonly disable: 'मथळे बंद';
    };
    readonly pip: {
      readonly enter: 'पिक्चर-इन-पिक्चर';
      readonly exit: 'पिक्चर-इन-पिक्चरमधून बाहेर पडा';
    };
    readonly live: {
      readonly playing: 'थेट प्रसारण सुरू आहे';
      readonly seekToEdge: 'थेट प्रसारणाकडे जा';
      readonly badge: 'थेट प्रसारण';
    };
    readonly cast: {
      readonly start: 'कास्टिंग सुरू करा';
      readonly stop: 'कास्टिंग थांबवा';
      readonly connecting: 'कनेक्ट होत आहे';
    };
    readonly airplay: {
      readonly start: 'AirPlay सुरू करा';
      readonly stop: 'AirPlay थांबवा';
    };
    readonly slider: {
      readonly seek: 'शोध';
    };
    readonly time: {
      readonly current: 'वर्तमान वेळ';
      readonly duration: 'कालावधी';
      readonly remaining: 'उर्वरित वेळ';
      readonly remainingSuffix: '{duration} उर्वरित';
      readonly showElapsed: '{duration}. गेलेला वेळ दाखवा.';
      readonly showDuration: '{duration}. कालावधी दाखवा.';
      readonly showRemaining: '{duration}. उरलेला वेळ दाखवा.';
      readonly position: '{duration} पैकी {current}';
    };
    readonly playback: {
      readonly rate: 'प्लेबॅक दर {rate}';
    };
    readonly volume: {
      readonly mutedValue: '{percent}, म्यूट केलेले';
      readonly muted: 'म्यूट केलेले';
      readonly label: 'आवाज';
      readonly value: 'आवाज {value}';
    };
    readonly status: {
      readonly captionsOn: 'मथळे चालू';
      readonly captionsOff: 'मथळे बंद';
      readonly paused: 'थांबलेले';
      readonly playing: 'वाजत आहे';
      readonly fullscreen: 'संपूर्ण पडदा';
      readonly pip: 'पिक्चरमध्ये पिक्चर';
      readonly exitPip: 'पिक्चरमध्ये पिक्चरमधून बाहेर';
      readonly seekedTo: '{time} वर पोहोचले';
    };
    readonly container: {
      readonly label: 'मीडिया प्लेयर';
    };
    readonly errors: {
      readonly aborted: 'तुम्ही मीडिया प्लेबॅक रद्द केला';
      readonly network: 'नेटवर्क त्रुटीमुळे मीडिया डाउनलोड अर्ध्यात अयशस्वी झाला.';
      readonly decode: 'मीडिया प्लेबॅक भ्रष्टाचाराच्या समस्येमुळे किंवा मीडियाने वापरलेल्या वैशिष्ट्यांमुळे तुमचा ब्राउझर सपोर्ट करत नसल्यामुळे रद्द करण्यात आला.';
      readonly source: 'मीडिया लोड करता आला नाही, एकतर सर्व्हर किंवा नेटवर्क अयशस्वी झाल्यामुळे किंवा फॉरमॅट समर्थित नसल्यामुळे.';
      readonly encrypted: 'मीडिया एन्क्रिप्ट केलेला आहे आणि तो डिक्रिप्ट करण्यासाठी आमच्याकडे कळा नाहीत.';
      readonly title: 'काहीतरी चुकले.';
      readonly unexpected: 'एक त्रुटी आली. कृपया पुन्हा प्रयत्न करा.';
    };
    readonly common: {
      readonly empty: '';
      readonly ok: 'बंद';
    };
    readonly menu: {
      readonly settings: 'सेटिंग्ज';
      readonly quality: 'गुणवत्ता';
      readonly audio: 'ऑडिओ';
      readonly default: 'डीफॉल्ट';
      readonly speed: 'गती';
      readonly captions: 'मथळे';
      readonly playbackRate: 'प्लेबॅक दर';
      readonly back: 'मागे';
      readonly off: 'बंद';
      readonly auto: 'स्वयंचलित';
      readonly autoWithLabel: 'स्वयंचलित ({label})';
      readonly subtitles: 'उपशीर्षके';
    };
  };
  readonly nb: {
    readonly buttons: {
      readonly play: 'Spill';
      readonly pause: 'Pause';
      readonly replay: 'Spill om igjen';
      readonly mute: 'Lyd av';
      readonly unmute: 'Lyd på';
    };
    readonly seek: {
      readonly forward: 'Hopp frem {seconds} sekunder';
      readonly backward: 'Hopp tilbake {seconds} sekunder';
    };
    readonly fullscreen: {
      readonly enter: 'Fullskjerm';
      readonly exit: 'Avslutt fullskjerm';
    };
    readonly captions: {
      readonly enable: 'Slå på teksting';
      readonly disable: 'Slå av teksting';
    };
    readonly pip: {
      readonly enter: 'Bilde-i-bilde';
      readonly exit: 'Avslutt bilde-i-bilde';
    };
    readonly live: {
      readonly playing: 'Spiller live';
      readonly seekToEdge: 'Gå til live';
      readonly badge: 'Direkte';
    };
    readonly cast: {
      readonly start: 'Start sending';
      readonly stop: 'Stopp sending';
      readonly connecting: 'Kobler til';
    };
    readonly airplay: {
      readonly start: 'Start AirPlay';
      readonly stop: 'Stopp AirPlay';
    };
    readonly slider: {
      readonly seek: 'Spol';
    };
    readonly time: {
      readonly current: 'Aktuell tid';
      readonly duration: 'Varighet';
      readonly remaining: 'Gjenstående tid';
      readonly remainingSuffix: '{duration} igjen';
      readonly showElapsed: '{duration}. Vis avspilt tid.';
      readonly showDuration: '{duration}. Vis varighet.';
      readonly showRemaining: '{duration}. Vis gjenstående tid.';
      readonly position: '{current} av {duration}';
    };
    readonly playback: {
      readonly rate: 'Avspillingshastighet {rate}';
    };
    readonly volume: {
      readonly mutedValue: '{percent}, dempet';
      readonly muted: 'Dempet';
      readonly label: 'Volum';
      readonly value: 'Volum {value}';
    };
    readonly status: {
      readonly captionsOn: 'Teksting på';
      readonly captionsOff: 'Teksting av';
      readonly paused: 'Satt på pause';
      readonly playing: 'Spiller';
      readonly fullscreen: 'Fullskjerm';
      readonly pip: 'Bilde i bilde';
      readonly exitPip: 'Avslutt bilde i bilde';
      readonly seekedTo: 'Hoppet til {time}';
    };
    readonly container: {
      readonly label: 'Mediespiller';
    };
    readonly errors: {
      readonly aborted: 'Du avbrøt avspillingen.';
      readonly network: 'En nettverksfeil avbrøt nedlasting av videoen.';
      readonly decode: 'Videoavspillingen ble avbrudt på grunn av ødelagte data eller fordi videoen ville gjøre noe som nettleseren din ikke har støtte for.';
      readonly source: 'Videoen kunne ikke lastes ned, på grunn av nettverksfeil eller serverfeil, eller fordi formatet ikke er støttet.';
      readonly encrypted: 'Mediefilen er kryptert og vi mangler nøkler for å dekryptere den.';
      readonly title: 'Noe gikk galt.';
      readonly unexpected: 'En feil oppstod. Vennligst prøv igjen.';
    };
    readonly common: {
      readonly empty: '';
      readonly ok: 'Lukk';
    };
    readonly menu: {
      readonly settings: 'Innstillinger';
      readonly quality: 'Kvalitet';
      readonly audio: 'Lyd';
      readonly default: 'Standard';
      readonly speed: 'Hastighet';
      readonly captions: 'Teksting';
      readonly playbackRate: 'Avspillingshastighet';
      readonly back: 'Tilbake';
      readonly off: 'Av';
      readonly auto: 'Auto';
      readonly autoWithLabel: 'Auto ({label})';
      readonly subtitles: 'Undertekster';
    };
  };
  readonly nl: {
    readonly buttons: {
      readonly play: 'Afspelen';
      readonly pause: 'Pauzeren';
      readonly replay: 'Opnieuw afspelen';
      readonly mute: 'Dempen';
      readonly unmute: 'Dempen uit';
    };
    readonly seek: {
      readonly forward: '{seconds} seconden vooruit';
      readonly backward: '{seconds} seconden terug';
    };
    readonly fullscreen: {
      readonly enter: 'Volledig scherm';
      readonly exit: 'Volledig scherm verlaten';
    };
    readonly captions: {
      readonly enable: 'Ondertiteling inschakelen';
      readonly disable: 'Ondertiteling uitschakelen';
    };
    readonly pip: {
      readonly enter: 'Picture-in-Picture';
      readonly exit: 'Picture-in-Picture uit';
    };
    readonly live: {
      readonly playing: 'Speelt live';
      readonly seekToEdge: 'Ga naar live';
      readonly badge: 'Live';
    };
    readonly cast: {
      readonly start: 'Casten starten';
      readonly stop: 'Casten stoppen';
      readonly connecting: 'Verbinden';
    };
    readonly airplay: {
      readonly start: 'AirPlay starten';
      readonly stop: 'AirPlay stoppen';
    };
    readonly slider: {
      readonly seek: 'Spoelen';
    };
    readonly time: {
      readonly current: 'Huidige tijd';
      readonly duration: 'Tijdsduur';
      readonly remaining: 'Resterende tijd';
      readonly remainingSuffix: 'Nog {duration}';
      readonly showElapsed: '{duration}. Verstreken tijd tonen.';
      readonly showDuration: '{duration}. Duur tonen.';
      readonly showRemaining: '{duration}. Resterende tijd tonen.';
      readonly position: '{current} van {duration}';
    };
    readonly playback: {
      readonly rate: 'Afspeelsnelheid {rate}';
    };
    readonly volume: {
      readonly mutedValue: '{percent}, gedempt';
      readonly muted: 'Gedempt';
      readonly label: 'Geluidsniveau';
      readonly value: 'Geluidsniveau {value}';
    };
    readonly status: {
      readonly captionsOn: 'Ondertiteling aan';
      readonly captionsOff: 'Ondertiteling uit';
      readonly paused: 'Gepauzeerd';
      readonly playing: 'Wordt afgespeeld';
      readonly fullscreen: 'Volledig scherm';
      readonly pip: 'Beeld-in-beeld';
      readonly exitPip: 'Beeld-in-beeld verlaten';
      readonly seekedTo: 'Gesprongen naar {time}';
    };
    readonly container: {
      readonly label: 'Mediaspeler';
    };
    readonly errors: {
      readonly aborted: 'U heeft het afspelen van de media afgebroken';
      readonly network: 'Een netwerkfout heeft ervoor gezorgd dat het downloaden van de media is mislukt.';
      readonly decode: 'Het afspelen van de media werd afgebroken vanwege een corruptieprobleem of omdat de uw browser de gebruikte mediafuncties niet ondersteund.';
      readonly source: 'De media kon niet worden geladen, doordat de server of het netwerk faalde of doordat het formaat niet wordt ondersteund.';
      readonly encrypted: 'De media is gecodeerd en we hebben niet de sleutels om het te decoderen.';
      readonly title: 'Er is iets misgegaan.';
      readonly unexpected: 'Er is een fout opgetreden. Probeer het opnieuw.';
    };
    readonly common: {
      readonly empty: '';
      readonly ok: 'Sluiten';
    };
    readonly menu: {
      readonly settings: 'Instellingen';
      readonly quality: 'Kwaliteit';
      readonly audio: 'Geluid';
      readonly default: 'Standaard';
      readonly speed: 'Snelheid';
      readonly captions: 'Ondertiteling';
      readonly playbackRate: 'Afspeelsnelheid';
      readonly back: 'Terug';
      readonly off: 'Uit';
      readonly auto: 'Auto';
      readonly autoWithLabel: 'Auto ({label})';
      readonly subtitles: 'Ondertiteling';
    };
  };
  readonly nn: {
    readonly buttons: {
      readonly play: 'Spel';
      readonly pause: 'Pause';
      readonly replay: 'Spel om att';
      readonly mute: 'Lyd av';
      readonly unmute: 'Lyd på';
    };
    readonly seek: {
      readonly forward: 'Hopp fram {seconds} sekund';
      readonly backward: 'Hopp tilbake {seconds} sekund';
    };
    readonly fullscreen: {
      readonly enter: 'Fullskjerm';
      readonly exit: 'Stenga fullskjerm';
    };
    readonly captions: {
      readonly enable: 'Slå på teksting';
      readonly disable: 'Slå av teksting';
    };
    readonly pip: {
      readonly enter: 'Bilete-i-bilete';
      readonly exit: 'Avslutt bilete-i-bilete';
    };
    readonly live: {
      readonly playing: 'Spelar live';
      readonly seekToEdge: 'Hopp til live';
      readonly badge: 'Direkte';
    };
    readonly cast: {
      readonly start: 'Start sending';
      readonly stop: 'Stopp sending';
      readonly connecting: 'Koplar til';
    };
    readonly airplay: {
      readonly start: 'Start AirPlay';
      readonly stop: 'Stopp AirPlay';
    };
    readonly slider: {
      readonly seek: 'Spol';
    };
    readonly time: {
      readonly current: 'Aktuell tid';
      readonly duration: 'Varigheit';
      readonly remaining: 'Tid attende';
      readonly remainingSuffix: '{duration} att';
      readonly showElapsed: '{duration}. Vis avspelt tid.';
      readonly showDuration: '{duration}. Vis lengd.';
      readonly showRemaining: '{duration}. Vis tid att.';
      readonly position: '{current} av {duration}';
    };
    readonly playback: {
      readonly rate: 'Avspelingshastigheit {rate}';
    };
    readonly volume: {
      readonly mutedValue: '{percent}, dempa';
      readonly muted: 'Dempa';
      readonly label: 'Volum';
      readonly value: 'Volum {value}';
    };
    readonly status: {
      readonly captionsOn: 'Teksting på';
      readonly captionsOff: 'Teksting av';
      readonly paused: 'Satt på pause';
      readonly playing: 'Spelar';
      readonly fullscreen: 'Fullskjerm';
      readonly pip: 'Bilete i bilete';
      readonly exitPip: 'Avslutt bilete i bilete';
      readonly seekedTo: 'Hoppa til {time}';
    };
    readonly container: {
      readonly label: 'Mediespelar';
    };
    readonly errors: {
      readonly aborted: 'Du avbraut avspelinga.';
      readonly network: 'Ein nettverksfeil avbraut nedlasting av videoen.';
      readonly decode: 'Videoavspelinga blei broten på grunn av øydelagde data eller av di videoen ville gjera noe som nettlesaren din ikkje stodar.';
      readonly source: 'Videoen kunne ikkje lastas ned, på grunn av ein nettverksfeil eller serverfeil, eller av di formatet ikkje er stoda.';
      readonly encrypted: 'Mediefila er kryptert og vi manglar nyklar for å dekryptere ho.';
      readonly title: 'Noko gjekk gale.';
      readonly unexpected: 'Det oppstod ein feil. Ver venleg prøv igjen.';
    };
    readonly common: {
      readonly empty: '';
      readonly ok: 'Lukk';
    };
    readonly menu: {
      readonly settings: 'Innstillingar';
      readonly quality: 'Kvalitet';
      readonly audio: 'Lyd';
      readonly default: 'Standard';
      readonly speed: 'Fart';
      readonly captions: 'Teksting';
      readonly playbackRate: 'Avspelingshastigheit';
      readonly back: 'Tilbake';
      readonly off: 'Av';
      readonly auto: 'Auto';
      readonly autoWithLabel: 'Auto ({label})';
      readonly subtitles: 'Undertekstar';
    };
  };
  readonly ne: {
    readonly buttons: {
      readonly play: 'चलाउनु';
      readonly pause: 'रोक्नु';
      readonly replay: 'फेरि चलाउनु';
      readonly mute: 'म्यूट गर्नुहोस्';
      readonly unmute: 'अनम्यूट गर्नुहोस्';
    };
    readonly seek: {
      readonly forward: '{seconds} सेकेन्ड अगाडि सार्नुहोस्';
      readonly backward: '{seconds} सेकेन्ड पछाडि सार्नुहोस्';
    };
    readonly fullscreen: {
      readonly enter: 'पूर्ण स्क्रिन';
      readonly exit: 'पूर्ण स्क्रिनबाट बाहिर';
    };
    readonly captions: {
      readonly enable: 'क्याप्शन';
      readonly disable: 'क्याप्शन बंद';
    };
    readonly pip: {
      readonly enter: 'पिक्चर-इन-पिक्चर';
      readonly exit: 'पिक्चर-इन-पिक्चरबाट बाहिर निस्कनुहोस्';
    };
    readonly live: {
      readonly playing: 'लाइभ चलिरहेको छ';
      readonly seekToEdge: 'लाइभमा जानुहोस्';
      readonly badge: 'लाइव';
    };
    readonly cast: {
      readonly start: 'कास्टिंग सुरू गर्नुहोस्';
      readonly stop: 'कास्टिंग रोक्नुहोस्';
      readonly connecting: 'जडान हुँदैछ';
    };
    readonly airplay: {
      readonly start: 'AirPlay सुरु गर्नुहोस्';
      readonly stop: 'AirPlay रोक्नुहोस्';
    };
    readonly slider: {
      readonly seek: 'खोज';
    };
    readonly time: {
      readonly current: 'हालको समय';
      readonly duration: 'अवधि';
      readonly remaining: 'बाँकी समय';
      readonly remainingSuffix: '{duration} बाँकी';
      readonly showElapsed: '{duration}. बितेको समय देखाउनुहोस्.';
      readonly showDuration: '{duration}. अवधि देखाउनुहोस्.';
      readonly showRemaining: '{duration}. बाँकी समय देखाउनुहोस्.';
      readonly position: '{duration} मध्ये {current}';
    };
    readonly playback: {
      readonly rate: 'प्लेब्याक दर {rate}';
    };
    readonly volume: {
      readonly mutedValue: '{percent}, म्यूट';
      readonly muted: 'म्यूट';
      readonly label: 'भोल्युम';
      readonly value: 'भोल्युम {value}';
    };
    readonly status: {
      readonly captionsOn: 'क्याप्शन चालू';
      readonly captionsOff: 'क्याप्शन बंद';
      readonly paused: 'रोकिएको';
      readonly playing: 'चलिरहेको';
      readonly fullscreen: 'पूर्ण स्क्रिन';
      readonly pip: 'पिक्चर इन पिक्चर';
      readonly exitPip: 'पिक्चर इन पिक्चरबाट बाहिर';
      readonly seekedTo: '{time} मा सारियो';
    };
    readonly container: {
      readonly label: 'मिडिया प्लेयर';
    };
    readonly errors: {
      readonly aborted: 'तपाईंले मिडिया प्लेब्याक रद्द गर्नुभयो';
      readonly network: 'नेटवर्क त्रुटिले मिडिया डाउनलोडलाई आधा मार्गमा असफल गर्यो।';
      readonly decode: 'मिडिया प्लेब्याक अवरुद्ध गरियो, कारण मिडिया दूषित भयो वा तपाईंको ब्राउजरले समर्थन नगरेको सुविधाहरू प्रयोग गर्यो।';
      readonly source: 'मिडिया लोड गर्न सकिएन, नेटवर्क वा सर्भर विफल भयो वा त्यसको प्रारूप समर्थित छैन।';
      readonly encrypted: 'मिडिया एन्क्रिप्ट गरिएको छ र हामीसँग डिक्रिप्ट गर्ने कुञ्जीहरू छैनन्।';
      readonly title: 'केही गलत भयो।';
      readonly unexpected: 'एउटा त्रुटि भयो। कृपया पुन: प्रयास गर्नुहोस्।';
    };
    readonly common: {
      readonly empty: '';
      readonly ok: 'बन्द गर्नुहोस्';
    };
    readonly menu: {
      readonly settings: 'सेटिङहरू';
      readonly quality: 'गुणस्तर';
      readonly audio: 'अडियो';
      readonly default: 'पूर्वनिर्धारित';
      readonly speed: 'गति';
      readonly captions: 'क्याप्शन';
      readonly playbackRate: 'प्लेब्याक दर';
      readonly back: 'पछाडि';
      readonly off: 'बन्द';
      readonly auto: 'स्वतः';
      readonly autoWithLabel: 'स्वतः ({label})';
      readonly subtitles: 'उपशीर्षक';
    };
  };
  readonly oc: {
    readonly buttons: {
      readonly play: 'Lectura';
      readonly pause: 'Pausa';
      readonly replay: 'Tornar legir';
      readonly mute: 'Copar lo son';
      readonly unmute: 'Restablir lo son';
    };
    readonly seek: {
      readonly forward: 'Avançar de {seconds} segondas';
      readonly backward: 'Recular de {seconds} segondas';
    };
    readonly fullscreen: {
      readonly enter: 'Ecran complèt';
      readonly exit: "Sortir de l'ecran complèt";
    };
    readonly captions: {
      readonly enable: 'Activar los subtítols';
      readonly disable: 'Desactivar los subtítols';
    };
    readonly pip: {
      readonly enter: 'Vidèo incrustada';
      readonly exit: 'Sortir de la vidèo incrustada';
    };
    readonly live: {
      readonly playing: 'Lectura dirècta';
      readonly seekToEdge: 'Anar al dirècte';
      readonly badge: 'Dirècte';
    };
    readonly cast: {
      readonly start: 'Anar en dirècte';
      readonly stop: 'Aturar la difusion';
      readonly connecting: 'Connexion en cors';
    };
    readonly airplay: {
      readonly start: 'Aviar AirPlay';
      readonly stop: 'Arrestar AirPlay';
    };
    readonly slider: {
      readonly seek: 'Desfilament';
    };
    readonly time: {
      readonly current: 'Durada passada';
      readonly duration: 'Durada';
      readonly remaining: 'Temps restant';
      readonly remainingSuffix: 'Demòra {duration}';
      readonly showElapsed: '{duration}. Afichar lo temps passat.';
      readonly showDuration: '{duration}. Afichar la durada.';
      readonly showRemaining: '{duration}. Afichar lo temps que demòra.';
      readonly position: '{current} sus {duration}';
    };
    readonly playback: {
      readonly rate: 'Velocitat de lectura {rate}';
    };
    readonly volume: {
      readonly mutedValue: '{percent}, silenciat';
      readonly muted: 'Silenciat';
      readonly label: 'Volum';
      readonly value: 'Volum {value}';
    };
    readonly status: {
      readonly captionsOn: 'Legendas activadas';
      readonly captionsOff: 'Legendas desactivadas';
      readonly paused: 'En pausa';
      readonly playing: 'En lectura';
      readonly fullscreen: 'Ecran complèt';
      readonly pip: 'Vidèo incrustada';
      readonly exitPip: 'Sortir de la vidèo incrustada';
      readonly seekedTo: 'Avançat fins a {time}';
    };
    readonly container: {
      readonly label: 'Lector multimèdia';
    };
    readonly errors: {
      readonly aborted: 'Avètz copat la lectura del mèdia.';
      readonly network: 'Una error de ret a provocat un fracàs del telecargament.';
      readonly decode: "La lectura del mèdia es copada a causa d'un problèma de corrupcion o perque lo mèdia utiliza de foncionalitats pas suportadas pel navigador.";
      readonly source: 'Lo mèdia a pas pogut èsser cargat, siá perque lo servidor o lo ret a fracassat siá perque lo format es pas compatible.';
      readonly encrypted: 'Lo mèdia es chifrat e avèm pas las claus per lo deschifrar.';
      readonly title: "Quaucarèn s'es mal passat.";
      readonly unexpected: "Una error s'es produsida. Provatz d'un autre còp.";
    };
    readonly common: {
      readonly empty: '';
      readonly ok: 'Tampar';
    };
    readonly menu: {
      readonly settings: 'Paramètres';
      readonly quality: 'Qualitat';
      readonly audio: 'Àudio';
      readonly default: 'Per defaut';
      readonly speed: 'Velocitat';
      readonly captions: 'Legendas';
      readonly playbackRate: 'Velocitat de lectura';
      readonly back: 'Retorn';
      readonly off: 'Desactivat';
      readonly auto: 'Automatic';
      readonly autoWithLabel: 'Automatic ({label})';
      readonly subtitles: 'Sostítols';
    };
  };
  readonly pl: {
    readonly buttons: {
      readonly play: 'Odtwórz';
      readonly pause: 'Wstrzymaj';
      readonly replay: 'Odtwórz ponownie';
      readonly mute: 'Wycisz';
      readonly unmute: 'Wyłącz wyciszenie';
    };
    readonly seek: {
      readonly forward: 'Przewiń do przodu o {seconds} s';
      readonly backward: 'Przewiń do tyłu o {seconds} s';
    };
    readonly fullscreen: {
      readonly enter: 'Pełny ekran';
      readonly exit: 'Wyjdź z pełnego ekranu';
    };
    readonly captions: {
      readonly enable: 'Włącz napisy';
      readonly disable: 'Wyłącz napisy';
    };
    readonly pip: {
      readonly enter: 'Obraz w obrazie';
      readonly exit: 'Wyjdź z trybu obraz w obrazie';
    };
    readonly live: {
      readonly playing: 'Odtwarzanie na żywo';
      readonly seekToEdge: 'Przejdź na transmisję na żywo';
      readonly badge: 'Na żywo';
    };
    readonly cast: {
      readonly start: 'Rozpocznij przesyłanie';
      readonly stop: 'Zatrzymaj przesyłanie';
      readonly connecting: 'Łączenie';
    };
    readonly airplay: {
      readonly start: 'Uruchom AirPlay';
      readonly stop: 'Zatrzymaj AirPlay';
    };
    readonly slider: {
      readonly seek: 'Przewijanie';
    };
    readonly time: {
      readonly current: 'Aktualny czas';
      readonly duration: 'Czas trwania';
      readonly remaining: 'Pozostały czas';
      readonly remainingSuffix: 'Pozostało {duration}';
      readonly showElapsed: '{duration}. Pokaż upływ czasu.';
      readonly showDuration: '{duration}. Pokaż czas trwania.';
      readonly showRemaining: '{duration}. Pokaż pozostały czas.';
      readonly position: '{current} z {duration}';
    };
    readonly playback: {
      readonly rate: 'Prędkość odtwarzania {rate}';
    };
    readonly volume: {
      readonly mutedValue: '{percent}, wyciszono';
      readonly muted: 'Wyciszono';
      readonly label: 'Głośność';
      readonly value: 'Głośność {value}';
    };
    readonly status: {
      readonly captionsOn: 'Napisy włączone';
      readonly captionsOff: 'Napisy wyłączone';
      readonly paused: 'Wstrzymano';
      readonly playing: 'Odtwarzanie';
      readonly fullscreen: 'Pełny ekran';
      readonly pip: 'Obraz w obrazie';
      readonly exitPip: 'Wyjdź z obrazu w obrazie';
      readonly seekedTo: 'Przewinięto do {time}';
    };
    readonly container: {
      readonly label: 'Odtwarzacz multimediów';
    };
    readonly errors: {
      readonly aborted: 'Odtwarzanie zostało przerwane';
      readonly network: 'Błąd sieci spowodował częściowe niepowodzenie pobierania materiału wideo.';
      readonly decode: 'Odtwarzanie materiału wideo zostało przerwane z powodu uszkodzonego pliku wideo lub z powodu użycia funkcji multimediów nieobsługiwanych przez Twoją przeglądarkę.';
      readonly source: 'Materiał wideo nie może zostać załadowany, ponieważ wystąpił problem z serwerem lub siecią albo format materiału wideo nie jest obsługiwany';
      readonly encrypted: 'Materiał jest zaszyfrowany, a nie mamy kluczy do jego odszyfrowania.';
      readonly title: 'Coś poszło nie tak.';
      readonly unexpected: 'Wystąpił błąd. Spróbuj ponownie.';
    };
    readonly common: {
      readonly empty: '';
      readonly ok: 'Zamknij';
    };
    readonly menu: {
      readonly settings: 'Ustawienia';
      readonly quality: 'Jakość';
      readonly audio: 'Dźwięk';
      readonly default: 'Domyślne';
      readonly speed: 'Szybkość';
      readonly captions: 'Napisy';
      readonly playbackRate: 'Prędkość odtwarzania';
      readonly back: 'Wstecz';
      readonly off: 'Wyłączone';
      readonly auto: 'Auto';
      readonly autoWithLabel: 'Auto ({label})';
      readonly subtitles: 'Napisy';
    };
  };
  readonly 'pt-BR': {
    readonly buttons: {
      readonly play: 'Tocar';
      readonly pause: 'Pausar';
      readonly replay: 'Tocar novamente';
      readonly mute: 'Mudo';
      readonly unmute: 'Ativar o som';
    };
    readonly seek: {
      readonly forward: 'Avançar {seconds} segundos';
      readonly backward: 'Retroceder {seconds} segundos';
    };
    readonly fullscreen: {
      readonly enter: 'Tela Cheia';
      readonly exit: 'Sair da tela cheia';
    };
    readonly captions: {
      readonly enable: 'Ativar legendas';
      readonly disable: 'Desativar legendas';
    };
    readonly pip: {
      readonly enter: 'Picture-in-Picture';
      readonly exit: 'Sair de Picture-in-Picture';
    };
    readonly live: {
      readonly playing: 'Reproduzindo ao vivo';
      readonly seekToEdge: 'Ir para o ao vivo';
      readonly badge: 'Ao vivo';
    };
    readonly cast: {
      readonly start: 'Iniciar transmissão';
      readonly stop: 'Parar transmissão';
      readonly connecting: 'Conectando';
    };
    readonly airplay: {
      readonly start: 'Iniciar AirPlay';
      readonly stop: 'Parar AirPlay';
    };
    readonly slider: {
      readonly seek: 'Buscar';
    };
    readonly time: {
      readonly current: 'Tempo';
      readonly duration: 'Duração';
      readonly remaining: 'Tempo Restante';
      readonly remainingSuffix: 'Restam {duration}';
      readonly showElapsed: '{duration}. Mostrar tempo decorrido.';
      readonly showDuration: '{duration}. Mostrar duração.';
      readonly showRemaining: '{duration}. Mostrar tempo restante.';
      readonly position: '{current} de {duration}';
    };
    readonly playback: {
      readonly rate: 'Velocidade {rate}';
    };
    readonly volume: {
      readonly mutedValue: '{percent}, silenciado';
      readonly muted: 'Silenciado';
      readonly label: 'Nível de volume';
      readonly value: 'Nível de volume {value}';
    };
    readonly status: {
      readonly captionsOn: 'Legendas ativadas';
      readonly captionsOff: 'Legendas desativadas';
      readonly paused: 'Pausado';
      readonly playing: 'Reproduzindo';
      readonly fullscreen: 'Tela cheia';
      readonly pip: 'Picture-in-picture';
      readonly exitPip: 'Sair do picture-in-picture';
      readonly seekedTo: 'Posição alterada para {time}';
    };
    readonly container: {
      readonly label: 'Reprodutor de mídia';
    };
    readonly errors: {
      readonly aborted: 'Você parou a execução do vídeo.';
      readonly network: 'Um erro na rede causou falha durante o download da mídia.';
      readonly decode: 'A reprodução foi interrompida devido à um problema de mídia corrompida ou porque a mídia utiliza funções que seu navegador não suporta.';
      readonly source: 'A mídia não pode ser carregada, por uma falha de rede ou servidor ou o formato não é suportado.';
      readonly encrypted: 'A mídia está criptografada e não temos as chaves para descriptografar.';
      readonly title: 'Algo deu errado.';
      readonly unexpected: 'Ocorreu um erro. Tente novamente.';
    };
    readonly common: {
      readonly empty: '';
      readonly ok: 'Fechar';
    };
    readonly menu: {
      readonly settings: 'Configurações';
      readonly quality: 'Qualidade';
      readonly audio: 'Áudio';
      readonly default: 'Padrão';
      readonly speed: 'Velocidade';
      readonly captions: 'Legendas';
      readonly playbackRate: 'Velocidade de reprodução';
      readonly back: 'Voltar';
      readonly off: 'Desativado';
      readonly auto: 'Auto';
      readonly autoWithLabel: 'Auto ({label})';
      readonly subtitles: 'Legendas';
    };
  };
  readonly 'pt-PT': {
    readonly buttons: {
      readonly play: 'Reproduzir';
      readonly pause: 'Pausar';
      readonly replay: 'Reiniciar';
      readonly mute: 'Desativar som';
      readonly unmute: 'Ativar som';
    };
    readonly seek: {
      readonly forward: 'Avançar {seconds} segundos';
      readonly backward: 'Recuar {seconds} segundos';
    };
    readonly fullscreen: {
      readonly enter: 'Ecrã inteiro';
      readonly exit: 'Sair de ecrã inteiro';
    };
    readonly captions: {
      readonly enable: 'Ativar legendas';
      readonly disable: 'Desativar legendas';
    };
    readonly pip: {
      readonly enter: 'Imagem em imagem';
      readonly exit: 'Sair de imagem em imagem';
    };
    readonly live: {
      readonly playing: 'A reproduzir em direto';
      readonly seekToEdge: 'Ir para o em direto';
      readonly badge: 'Em direto';
    };
    readonly cast: {
      readonly start: 'Iniciar transmissão';
      readonly stop: 'Parar transmissão';
      readonly connecting: 'A ligar';
    };
    readonly airplay: {
      readonly start: 'Iniciar AirPlay';
      readonly stop: 'Parar AirPlay';
    };
    readonly slider: {
      readonly seek: 'Procurar';
    };
    readonly time: {
      readonly current: 'Tempo Atual';
      readonly duration: 'Duração';
      readonly remaining: 'Tempo Restante';
      readonly remainingSuffix: 'Restam {duration}';
      readonly showElapsed: '{duration}. Mostrar tempo decorrido.';
      readonly showDuration: '{duration}. Mostrar duração.';
      readonly showRemaining: '{duration}. Mostrar tempo restante.';
      readonly position: '{current} de {duration}';
    };
    readonly playback: {
      readonly rate: 'Velocidade de reprodução {rate}';
    };
    readonly volume: {
      readonly mutedValue: '{percent}, sem som';
      readonly muted: 'Sem som';
      readonly label: 'Nível de volume';
      readonly value: 'Nível de volume {value}';
    };
    readonly status: {
      readonly captionsOn: 'Legendas ativas';
      readonly captionsOff: 'Legendas desativadas';
      readonly paused: 'Em pausa';
      readonly playing: 'A reproduzir';
      readonly fullscreen: 'Ecrã inteiro';
      readonly pip: 'Imagem em imagem';
      readonly exitPip: 'Sair de imagem em imagem';
      readonly seekedTo: 'Posição alterada para {time}';
    };
    readonly container: {
      readonly label: 'Reprodutor multimédia';
    };
    readonly errors: {
      readonly aborted: 'Parou a reprodução do vídeo.';
      readonly network: 'Um erro na rede fez o vídeo falhar parcialmente.';
      readonly decode: 'A reprodução foi interrompida por um problema com o vídeo ou porque o formato não é compatível com o seu navegador.';
      readonly source: 'O vídeo não pode ser carregado, ou porque houve um problema na rede ou no servidor, ou porque o formato do vídeo não é compatível.';
      readonly encrypted: 'O vídeo está encriptado e não há uma chave para o desencriptar.';
      readonly title: 'Algo correu mal.';
      readonly unexpected: 'Ocorreu um erro. Por favor tente novamente.';
    };
    readonly common: {
      readonly empty: '';
      readonly ok: 'Fechar';
    };
    readonly menu: {
      readonly settings: 'Definições';
      readonly quality: 'Qualidade';
      readonly audio: 'Áudio';
      readonly default: 'Predefinição';
      readonly speed: 'Velocidade';
      readonly captions: 'Legendas';
      readonly playbackRate: 'Velocidade de reprodução';
      readonly back: 'Voltar';
      readonly off: 'Desativado';
      readonly auto: 'Auto';
      readonly autoWithLabel: 'Auto ({label})';
      readonly subtitles: 'Legendas';
    };
  };
  readonly ro: {
    readonly buttons: {
      readonly play: 'Redare';
      readonly pause: 'Pauză';
      readonly replay: 'Reluare';
      readonly mute: 'Fără sunet';
      readonly unmute: 'Cu sunet';
    };
    readonly seek: {
      readonly forward: 'Salt înainte {seconds} secunde';
      readonly backward: 'Salt înapoi {seconds} secunde';
    };
    readonly fullscreen: {
      readonly enter: 'Ecran complet';
      readonly exit: 'Ieșire ecran complet';
    };
    readonly captions: {
      readonly enable: 'Activează subtitrările';
      readonly disable: 'Dezactivează subtitrările';
    };
    readonly pip: {
      readonly enter: 'Imagine în imagine';
      readonly exit: 'Închidere imagine în imagine';
    };
    readonly live: {
      readonly playing: 'Redare în direct';
      readonly seekToEdge: 'Salt la direct';
      readonly badge: 'În direct';
    };
    readonly cast: {
      readonly start: 'Pornire transmisie';
      readonly stop: 'Oprire transmisie';
      readonly connecting: 'Se conectează';
    };
    readonly airplay: {
      readonly start: 'Pornește AirPlay';
      readonly stop: 'Oprește AirPlay';
    };
    readonly slider: {
      readonly seek: 'Derulare';
    };
    readonly time: {
      readonly current: 'Ora curentă';
      readonly duration: 'Durată';
      readonly remaining: 'Timp rămas';
      readonly remainingSuffix: 'Mai rămân {duration}';
      readonly showElapsed: '{duration}. Afișează timpul scurs.';
      readonly showDuration: '{duration}. Afișează durata.';
      readonly showRemaining: '{duration}. Afișează timpul rămas.';
      readonly position: '{current} din {duration}';
    };
    readonly playback: {
      readonly rate: 'Rată de redare {rate}';
    };
    readonly volume: {
      readonly mutedValue: '{percent}, mut';
      readonly muted: 'Mut';
      readonly label: 'Volum';
      readonly value: 'Volum {value}';
    };
    readonly status: {
      readonly captionsOn: 'Subtitrări activate';
      readonly captionsOff: 'Subtitrări dezactivate';
      readonly paused: 'Pauză';
      readonly playing: 'Se redă';
      readonly fullscreen: 'Ecran complet';
      readonly pip: 'Imagine în imagine';
      readonly exitPip: 'Închidere imagine în imagine';
      readonly seekedTo: 'S-a trecut la {time}';
    };
    readonly container: {
      readonly label: 'Player media';
    };
    readonly errors: {
      readonly aborted: 'Ați abandonat redarea media';
      readonly network: 'O eroare de rețea a provocat eșecul descărcării conținutului media în timpul procesului.';
      readonly decode: 'Redarea media a fost întreruptă din cauza conținutului corupt sau din cauza faptului că acest conținut media folosește funcții pe care browserul dvs. nu le acceptă.';
      readonly source: 'Conținutul media nu a putut fi încărcat, fie pentru că serverul sau rețeaua a eșuat, fie pentru că formatul nu este acceptat.';
      readonly encrypted: 'Conținutul media este criptat și nu avem cheile pentru decriptare.';
      readonly title: 'Ceva a mers greșit.';
      readonly unexpected: 'A apărut o eroare. Vă rugăm să încercați din nou.';
    };
    readonly common: {
      readonly empty: '';
      readonly ok: 'Închidere';
    };
    readonly menu: {
      readonly settings: 'Setări';
      readonly quality: 'Calitate';
      readonly audio: 'Sunet';
      readonly default: 'Implicit';
      readonly speed: 'Viteză';
      readonly captions: 'Subtitrări';
      readonly playbackRate: 'Rată de redare';
      readonly back: 'Înapoi';
      readonly off: 'Dezactivat';
      readonly auto: 'Automat';
      readonly autoWithLabel: 'Automat ({label})';
      readonly subtitles: 'Subtitrări';
    };
  };
  readonly ru: {
    readonly buttons: {
      readonly play: 'Воспроизвести';
      readonly pause: 'Приостановить';
      readonly replay: 'Воспроизвести снова';
      readonly mute: 'Без звука';
      readonly unmute: 'Со звуком';
    };
    readonly seek: {
      readonly forward: 'На {seconds} секунд вперед';
      readonly backward: 'На {seconds} секунд назад';
    };
    readonly fullscreen: {
      readonly enter: 'Полноэкранный режим';
      readonly exit: 'Выйти из полноэкранного режима';
    };
    readonly captions: {
      readonly enable: 'Включить субтитры';
      readonly disable: 'Отключить субтитры';
    };
    readonly pip: {
      readonly enter: 'Картинка в картинке';
      readonly exit: 'Закрыть картинку в картинке';
    };
    readonly live: {
      readonly playing: 'Прямой эфир';
      readonly seekToEdge: 'Перейти к прямому эфиру';
      readonly badge: 'Прямой эфир';
    };
    readonly cast: {
      readonly start: 'Начать трансляцию';
      readonly stop: 'Остановить трансляцию';
      readonly connecting: 'Подключение';
    };
    readonly airplay: {
      readonly start: 'Запустить AirPlay';
      readonly stop: 'Остановить AirPlay';
    };
    readonly slider: {
      readonly seek: 'Перемотка';
    };
    readonly time: {
      readonly current: 'Текущее время';
      readonly duration: 'Продолжительность';
      readonly remaining: 'Оставшееся время';
      readonly remainingSuffix: 'Осталось {duration}';
      readonly showElapsed: '{duration}. Показать прошедшее время.';
      readonly showDuration: '{duration}. Показать длительность.';
      readonly showRemaining: '{duration}. Показать оставшееся время.';
      readonly position: '{current} из {duration}';
    };
    readonly playback: {
      readonly rate: 'Скорость воспроизведения {rate}';
    };
    readonly volume: {
      readonly mutedValue: '{percent}, без звука';
      readonly muted: 'Без звука';
      readonly label: 'Громкость';
      readonly value: 'Громкость {value}';
    };
    readonly status: {
      readonly captionsOn: 'Субтитры включены';
      readonly captionsOff: 'Субтитры выключены';
      readonly paused: 'На паузе';
      readonly playing: 'Воспроизведение';
      readonly fullscreen: 'Полноэкранный режим';
      readonly pip: 'Картинка в картинке';
      readonly exitPip: 'Выйти из режима «картинка в картинке»';
      readonly seekedTo: 'Переход к отметке {time}';
    };
    readonly container: {
      readonly label: 'Медиаплеер';
    };
    readonly errors: {
      readonly aborted: 'Вы прервали воспроизведение видео';
      readonly network: 'Ошибка сети вызвала сбой во время загрузки.';
      readonly decode: 'Воспроизведение прервано из-за повреждения либо в связи с тем, что видео использует функции, неподдерживаемые вашим браузером.';
      readonly source: 'Не удалось загрузить видео из-за сетевого или серверного сбоя либо неподдерживаемого формата видео.';
      readonly encrypted: 'Видео зашифровано, а у нас нет ключей для его расшифровки.';
      readonly title: 'Что-то пошло не так.';
      readonly unexpected: 'Произошла ошибка. Попробуйте снова.';
    };
    readonly common: {
      readonly empty: '';
      readonly ok: 'Закрыть';
    };
    readonly menu: {
      readonly settings: 'Настройки';
      readonly quality: 'Качество';
      readonly audio: 'Аудио';
      readonly default: 'По умолчанию';
      readonly speed: 'Скорость';
      readonly captions: 'Субтитры';
      readonly playbackRate: 'Скорость воспроизведения';
      readonly back: 'Назад';
      readonly off: 'Выкл.';
      readonly auto: 'Авто';
      readonly autoWithLabel: 'Авто ({label})';
      readonly subtitles: 'Субтитры';
    };
  };
  readonly sk: {
    readonly buttons: {
      readonly play: 'Prehrať';
      readonly pause: 'Pozastaviť';
      readonly replay: 'Prehrať znova';
      readonly mute: 'Stlmiť';
      readonly unmute: 'Zrušiť stlmenie';
    };
    readonly seek: {
      readonly forward: 'Posunúť dopredu o {seconds} s';
      readonly backward: 'Posunúť dozadu o {seconds} s';
    };
    readonly fullscreen: {
      readonly enter: 'Režim celej obrazovky';
      readonly exit: 'Zavrieť celú obrazovku';
    };
    readonly captions: {
      readonly enable: 'Zapnúť titulky';
      readonly disable: 'Vypnúť titulky';
    };
    readonly pip: {
      readonly enter: 'Obraz v obraze';
      readonly exit: 'Zavrieť obraz v obraze';
    };
    readonly live: {
      readonly playing: 'Prehráva sa naživo';
      readonly seekToEdge: 'Prejsť na živé vysielanie';
      readonly badge: 'Naživo';
    };
    readonly cast: {
      readonly start: 'Spustiť prenos';
      readonly stop: 'Zastaviť prenos';
      readonly connecting: 'Pripájam';
    };
    readonly airplay: {
      readonly start: 'Spustiť AirPlay';
      readonly stop: 'Zastaviť AirPlay';
    };
    readonly slider: {
      readonly seek: 'Posun';
    };
    readonly time: {
      readonly current: 'Aktuálny čas';
      readonly duration: 'Čas trvania';
      readonly remaining: 'Zostávajúci čas';
      readonly remainingSuffix: 'Zostáva {duration}';
      readonly showElapsed: '{duration}. Zobraziť uplynulý čas.';
      readonly showDuration: '{duration}. Zobraziť trvanie.';
      readonly showRemaining: '{duration}. Zobraziť zostávajúci čas.';
      readonly position: '{current} z {duration}';
    };
    readonly playback: {
      readonly rate: 'Rýchlosť prehrávania {rate}';
    };
    readonly volume: {
      readonly mutedValue: '{percent}, stlmené';
      readonly muted: 'Stlmené';
      readonly label: 'Hlasitosť';
      readonly value: 'Hlasitosť {value}';
    };
    readonly status: {
      readonly captionsOn: 'Popisky zapnuté';
      readonly captionsOff: 'Popisky vypnuté';
      readonly paused: 'Pozastavené';
      readonly playing: 'Prehráva sa';
      readonly fullscreen: 'Celá obrazovka';
      readonly pip: 'Obraz v obraze';
      readonly exitPip: 'Zavrieť obraz v obraze';
      readonly seekedTo: 'Presunuté na {time}';
    };
    readonly container: {
      readonly label: 'Prehrávač médií';
    };
    readonly errors: {
      readonly aborted: 'Prerušili ste prehrávanie';
      readonly network: 'Sťahovanie súboru bolo zrušené pre chybu na sieti.';
      readonly decode: 'Prehrávanie súboru bolo prerušené pre poškodené dáta, alebo súbor používa vlastnosti, ktoré váš prehliadač nepodporuje.';
      readonly source: 'Súbor sa nepodarilo načítať pre chybu servera, sieťového pripojenia, alebo je formát súboru nepodporovaný.';
      readonly encrypted: 'Súbor je zašifrovaný a nie je k dispozícii kľúč na rozšifrovanie.';
      readonly title: 'Niečo sa pokazilo.';
      readonly unexpected: 'Vyskytla sa chyba. Skúste to znova.';
    };
    readonly common: {
      readonly empty: '';
      readonly ok: 'Zatvoriť';
    };
    readonly menu: {
      readonly settings: 'Nastavenia';
      readonly quality: 'Kvalita';
      readonly audio: 'Zvuk';
      readonly default: 'Predvolené';
      readonly speed: 'Rýchlosť';
      readonly captions: 'Titulky';
      readonly playbackRate: 'Rýchlosť prehrávania';
      readonly back: 'Späť';
      readonly off: 'Vypnuté';
      readonly auto: 'Automaticky';
      readonly autoWithLabel: 'Automaticky ({label})';
      readonly subtitles: 'Titulky';
    };
  };
  readonly sl: {
    readonly buttons: {
      readonly play: 'Predvajaj';
      readonly pause: 'Začasno ustavi';
      readonly replay: 'Predvajaj ponovno';
      readonly mute: 'Izključi zvok';
      readonly unmute: 'Vključi zvok';
    };
    readonly seek: {
      readonly forward: 'Preskoči naprej {seconds} sekund';
      readonly backward: 'Preskoči nazaj {seconds} sekund';
    };
    readonly fullscreen: {
      readonly enter: 'Celozaslonski prikaz';
      readonly exit: 'Izhod iz celozaslonskega prikaza';
    };
    readonly captions: {
      readonly enable: 'Vklopi podnapise';
      readonly disable: 'Izklopi podnapise';
    };
    readonly pip: {
      readonly enter: 'Slika v sliki';
      readonly exit: 'Izhod iz slike v sliki';
    };
    readonly live: {
      readonly playing: 'Predvajanje v živo';
      readonly seekToEdge: 'Skoči na live';
      readonly badge: 'V živo';
    };
    readonly cast: {
      readonly start: 'Začni predvajanje na zaslonu';
      readonly stop: 'Ustavi predvajanje na zaslonu';
      readonly connecting: 'Povezovanje';
    };
    readonly airplay: {
      readonly start: 'Zaženi AirPlay';
      readonly stop: 'Ustavi AirPlay';
    };
    readonly slider: {
      readonly seek: 'Premikanje';
    };
    readonly time: {
      readonly current: 'Trenutni čas';
      readonly duration: 'Trajanje';
      readonly remaining: 'Preostali čas';
      readonly remainingSuffix: 'Preostane {duration}';
      readonly showElapsed: '{duration}. Prikaži pretekli čas.';
      readonly showDuration: '{duration}. Prikaži trajanje.';
      readonly showRemaining: '{duration}. Prikaži preostali čas.';
      readonly position: '{current} od {duration}';
    };
    readonly playback: {
      readonly rate: 'Hitrost predvajanja {rate}';
    };
    readonly volume: {
      readonly mutedValue: '{percent}, izklopljeno';
      readonly muted: 'Izklopljeno';
      readonly label: 'Glasnost';
      readonly value: 'Glasnost {value}';
    };
    readonly status: {
      readonly captionsOn: 'Zvočni zapis vklopljen';
      readonly captionsOff: 'Zvočni zapis izklopljen';
      readonly paused: 'Začasno ustavljeno';
      readonly playing: 'Predvaja';
      readonly fullscreen: 'Celozaslonski prikaz';
      readonly pip: 'Slika v sliki';
      readonly exitPip: 'Izhod iz slike v sliki';
      readonly seekedTo: 'Premaknjeno na {time}';
    };
    readonly container: {
      readonly label: 'Medijski predvajalnik';
    };
    readonly errors: {
      readonly aborted: 'Prekinili ste predvajanje.';
      readonly network: 'Prenos multimedijske datoteke ni uspel zaradi napake v omrežju.';
      readonly decode: 'Predvajanje datoteke je bilo prekinjeno zaradi napak v datoteki ali ker uporablja funkcije, ki jih brskalnik ne podpira.';
      readonly source: 'Multimedijske datoteke ni bilo mogoče naložiti zaradi napake na strežniku oziroma omrežju ali ker ta oblika ni podprta.';
      readonly encrypted: 'Datoteka je šifrirana in predvajalnik nima ključev za njeno dešifriranje.';
      readonly title: 'Nekaj je šlo narobe.';
      readonly unexpected: 'Prišlo je do napake. Poskusite znova.';
    };
    readonly common: {
      readonly empty: '';
      readonly ok: 'Zapri';
    };
    readonly menu: {
      readonly settings: 'Nastavitve';
      readonly quality: 'Kakovost';
      readonly audio: 'Zvok';
      readonly default: 'Privzeto';
      readonly speed: 'Hitrost';
      readonly captions: 'Podnapisi';
      readonly playbackRate: 'Hitrost predvajanja';
      readonly back: 'Nazaj';
      readonly off: 'Izklopljeno';
      readonly auto: 'Samodejno';
      readonly autoWithLabel: 'Samodejno ({label})';
      readonly subtitles: 'Podnapisi';
    };
  };
  readonly sr: {
    readonly buttons: {
      readonly play: 'Pusti';
      readonly pause: 'Pauza';
      readonly replay: 'Ponovi';
      readonly mute: 'Utišaj';
      readonly unmute: 'Poništi utišavanje';
    };
    readonly seek: {
      readonly forward: 'Premotaj unapred {seconds} sekundi';
      readonly backward: 'Premotaj unazad {seconds} sekundi';
    };
    readonly fullscreen: {
      readonly enter: 'Pun ekran';
      readonly exit: 'Izađi iz punog ekrana';
    };
    readonly captions: {
      readonly enable: 'Uključi titlove';
      readonly disable: 'Isključi titlove';
    };
    readonly pip: {
      readonly enter: 'Slika u slici';
      readonly exit: 'Izađi iz slike u slici';
    };
    readonly live: {
      readonly playing: 'Reprodukcija uživo';
      readonly seekToEdge: 'Idi na live';
      readonly badge: 'Uživo';
    };
    readonly cast: {
      readonly start: 'Počni emitovanje';
      readonly stop: 'Zaustavi emitovanje';
      readonly connecting: 'Povezivanje';
    };
    readonly airplay: {
      readonly start: 'Покрени AirPlay';
      readonly stop: 'Заустави AirPlay';
    };
    readonly slider: {
      readonly seek: 'Premotavanje';
    };
    readonly time: {
      readonly current: 'Trenutno vreme';
      readonly duration: 'Vreme trajanja';
      readonly remaining: 'Preostalo vreme';
      readonly remainingSuffix: 'Preostalo {duration}';
      readonly showElapsed: '{duration}. Prikaži proteklo vreme.';
      readonly showDuration: '{duration}. Prikaži trajanje.';
      readonly showRemaining: '{duration}. Prikaži preostalo vreme.';
      readonly position: '{current} od {duration}';
    };
    readonly playback: {
      readonly rate: 'Stopa reprodukcije {rate}';
    };
    readonly volume: {
      readonly mutedValue: '{percent}, utišano';
      readonly muted: 'Utišano';
      readonly label: 'Jačina zvuka';
      readonly value: 'Jačina zvuka {value}';
    };
    readonly status: {
      readonly captionsOn: 'Titlovi uključeni';
      readonly captionsOff: 'Titlovi isključeni';
      readonly paused: 'Pauzirano';
      readonly playing: 'Reprodukuje se';
      readonly fullscreen: 'Pun ekran';
      readonly pip: 'Slika u slici';
      readonly exitPip: 'Izađi iz slike u slici';
      readonly seekedTo: 'Premotano na {time}';
    };
    readonly container: {
      readonly label: 'Medija plejer';
    };
    readonly errors: {
      readonly aborted: 'Isključili ste reprodukciju videa.';
      readonly network: 'Video se prestao preuzimati zbog greške na mreži.';
      readonly decode: 'Reprodukcija videa je zaustavljena zbog greške u formatu ili zbog verzije vašeg pretraživača.';
      readonly source: 'Video se ne može reproducirati zbog servera, greške u mreži ili format nije podržan.';
      readonly encrypted: 'Medij je šifrovan i nema ključeva za dešifrovanje.';
      readonly title: 'Nešto je pošlo po zlu.';
      readonly unexpected: 'Došlo je do greške. Molimo pokušajte ponovo.';
    };
    readonly common: {
      readonly empty: '';
      readonly ok: 'Zatvori';
    };
    readonly menu: {
      readonly settings: 'Podešavanja';
      readonly quality: 'Kvalitet';
      readonly audio: 'Zvuk';
      readonly default: 'Подразумевано';
      readonly speed: 'Brzina';
      readonly captions: 'Titlovi';
      readonly playbackRate: 'Stopa reprodukcije';
      readonly back: 'Nazad';
      readonly off: 'Isključeno';
      readonly auto: 'Automatski';
      readonly autoWithLabel: 'Automatski ({label})';
      readonly subtitles: 'Titlovi';
    };
  };
  readonly sv: {
    readonly buttons: {
      readonly play: 'Spela';
      readonly pause: 'Pausa';
      readonly replay: 'Spela upp igen';
      readonly mute: 'Ljud av';
      readonly unmute: 'Ljud på';
    };
    readonly seek: {
      readonly forward: 'Hoppa framåt {seconds} sekunder';
      readonly backward: 'Hoppa bakåt {seconds} sekunder';
    };
    readonly fullscreen: {
      readonly enter: 'Fullskärm';
      readonly exit: 'Avsluta fullskärm';
    };
    readonly captions: {
      readonly enable: 'Aktivera textning';
      readonly disable: 'Inaktivera textning';
    };
    readonly pip: {
      readonly enter: 'Bild-i-bild';
      readonly exit: 'Avsluta bild-i-bild';
    };
    readonly live: {
      readonly playing: 'Spelar live';
      readonly seekToEdge: 'Gå till live';
      readonly badge: 'Live';
    };
    readonly cast: {
      readonly start: 'Starta casting';
      readonly stop: 'Stoppa casting';
      readonly connecting: 'Ansluter';
    };
    readonly airplay: {
      readonly start: 'Starta AirPlay';
      readonly stop: 'Stoppa AirPlay';
    };
    readonly slider: {
      readonly seek: 'Spola';
    };
    readonly time: {
      readonly current: 'Aktuell tid';
      readonly duration: 'Total tid';
      readonly remaining: 'Återstående tid';
      readonly remainingSuffix: '{duration} kvar';
      readonly showElapsed: '{duration}. Visa förfluten tid.';
      readonly showDuration: '{duration}. Visa längd.';
      readonly showRemaining: '{duration}. Visa återstående tid.';
      readonly position: '{current} av {duration}';
    };
    readonly playback: {
      readonly rate: 'Uppspelningshastighet {rate}';
    };
    readonly volume: {
      readonly mutedValue: '{percent}, tystat';
      readonly muted: 'Tystat';
      readonly label: 'Volym';
      readonly value: 'Volym {value}';
    };
    readonly status: {
      readonly captionsOn: 'Text på';
      readonly captionsOff: 'Text av';
      readonly paused: 'Pausad';
      readonly playing: 'Spelar';
      readonly fullscreen: 'Fullskärm';
      readonly pip: 'Bild i bild';
      readonly exitPip: 'Avsluta bild i bild';
      readonly seekedTo: 'Hoppade till {time}';
    };
    readonly container: {
      readonly label: 'Mediaspelare';
    };
    readonly errors: {
      readonly aborted: 'Du har avbrutit videouppspelningen.';
      readonly network: 'Ett nätverksfel gjorde att nedladdningen av videon avbröts.';
      readonly decode: 'Uppspelningen avbröts på grund av att videon är skadad, eller också för att videon använder funktioner som din webbläsare inte stöder.';
      readonly source: 'Det gick inte att ladda videon, antingen på grund av ett server- eller nätverksfel, eller för att formatet inte stöds.';
      readonly encrypted: 'Mediat är krypterat och vi har inte nycklarna för att dekryptera det.';
      readonly title: 'Något gick fel.';
      readonly unexpected: 'Ett fel uppstod. Försök igen.';
    };
    readonly common: {
      readonly empty: '';
      readonly ok: 'Stäng';
    };
    readonly menu: {
      readonly settings: 'Inställningar';
      readonly quality: 'Kvalitet';
      readonly audio: 'Ljud';
      readonly default: 'Standard';
      readonly speed: 'Hastighet';
      readonly captions: 'Textning';
      readonly playbackRate: 'Uppspelningshastighet';
      readonly back: 'Tillbaka';
      readonly off: 'Av';
      readonly auto: 'Auto';
      readonly autoWithLabel: 'Auto ({label})';
      readonly subtitles: 'Undertexter';
    };
  };
  readonly te: {
    readonly buttons: {
      readonly play: 'ప్లే';
      readonly pause: 'పాజ్';
      readonly replay: 'రీప్లే';
      readonly mute: 'మ్యూట్';
      readonly unmute: 'అన్మ్యూట్ చేయండి';
    };
    readonly seek: {
      readonly forward: '{seconds} సెకన్లు ముందుకు';
      readonly backward: '{seconds} సెకన్లు వెనుకకు';
    };
    readonly fullscreen: {
      readonly enter: 'పూర్తి స్క్రీన్';
      readonly exit: 'పూర్తి స్క్రీన్ నుండి నిష్క్రమించండి';
    };
    readonly captions: {
      readonly enable: 'శీర్షికలు';
      readonly disable: 'శీర్షికలు ఆఫ్ చేయండి';
    };
    readonly pip: {
      readonly enter: 'పిక్చర్-ఇన్-పిక్చర్';
      readonly exit: 'పిక్చర్-ఇన్-పిక్చర్ నుండి నిష్క్రమించండి';
    };
    readonly live: {
      readonly playing: 'లైవ్‌లో ప్లే అవుతోంది';
      readonly seekToEdge: 'లైవ్‌కు వెళ్లండి';
      readonly badge: 'లైవ్';
    };
    readonly cast: {
      readonly start: 'కాస్టింగ్ ప్రారంభించండి';
      readonly stop: 'కాస్టింగ్ ఆపండి';
      readonly connecting: 'కనెక్ట్ అవుతోంది';
    };
    readonly airplay: {
      readonly start: 'AirPlay ప్రారంభించండి';
      readonly stop: 'AirPlay ఆపండి';
    };
    readonly slider: {
      readonly seek: 'శోధించు';
    };
    readonly time: {
      readonly current: 'ప్రస్తుత సమయం';
      readonly duration: 'వ్యవధి';
      readonly remaining: 'మిగిలిన సమయం';
      readonly remainingSuffix: '{duration} మిగిలి';
      readonly showElapsed: '{duration}. గడిచిన సమయం చూపు.';
      readonly showDuration: '{duration}. వ్యవధి చూపు.';
      readonly showRemaining: '{duration}. మిగిలిన సమయం చూపు.';
      readonly position: '{current} యొక్క {duration}';
    };
    readonly playback: {
      readonly rate: 'ప్లేబ్యాక్ రేట్ {rate}';
    };
    readonly volume: {
      readonly mutedValue: '{percent}, మ్యూట్ చేయబడింది';
      readonly muted: 'మ్యూట్ చేయబడింది';
      readonly label: 'వాల్యూమ్';
      readonly value: 'వాల్యూమ్ {value}';
    };
    readonly status: {
      readonly captionsOn: 'శీర్షికలు ఆన్';
      readonly captionsOff: 'శీర్షికలు ఆఫ్';
      readonly paused: 'పాజ్ చేయబడింది';
      readonly playing: 'ప్లే అవుతోంది';
      readonly fullscreen: 'పూర్తి స్క్రీన్';
      readonly pip: 'పిక్చర్ ఇన్ పిక్చర్';
      readonly exitPip: 'పిక్చర్ ఇన్ పిక్చర్ నుండి నిష్క్రమించండి';
      readonly seekedTo: '{time}కి తరలించబడింది';
    };
    readonly container: {
      readonly label: 'మీడియా ప్లేయర్';
    };
    readonly errors: {
      readonly aborted: 'మీరు మీడియా ప్లేబ్యాక్‌ను రద్దు చేశారు';
      readonly network: 'నెట్‌వర్క్ లోపం వలన మీడియా డౌన్‌లోడ్ విఫలమైంది.';
      readonly decode: 'అవినీతి సమస్య కారణంగా లేదా మీ బ్రౌజర్ మద్దతు ఇవ్వని లక్షణాలను మీడియా ఉపయోగించినందున మీడియా ప్లేబ్యాక్ నిలిపివేయబడింది.';
      readonly source: 'సర్వర్ లేదా నెట్‌వర్క్ విఫలమైనందున లేదా ఫార్మాట్‌కు మద్దతు లేనందున మీడియాను లోడ్ చేయడం సాధ్యం కాలేదు.';
      readonly encrypted: 'మీడియా గుప్తీకరించబడింది మరియు దానిని డీక్రిప్ట్ చేయడానికి మాకు కీలు లేవు.';
      readonly title: 'ఏదో తప్పు జరిగింది.';
      readonly unexpected: 'ఒక లోపం సంభవించింది. దయచేసి మళ్ళీ ప్రయత్నించండి.';
    };
    readonly common: {
      readonly empty: '';
      readonly ok: 'మూసివేయండి';
    };
    readonly menu: {
      readonly settings: 'సెట్టింగ్‌లు';
      readonly quality: 'నాణ్యత';
      readonly audio: 'ఆడియో';
      readonly default: 'డిఫాల్ట్';
      readonly speed: 'వేగం';
      readonly captions: 'శీర్షికలు';
      readonly playbackRate: 'ప్లేబ్యాక్ రేట్';
      readonly back: 'వెనుకకు';
      readonly off: 'ఆఫ్';
      readonly auto: 'ఆటో';
      readonly autoWithLabel: 'ఆటో ({label})';
      readonly subtitles: 'ఉపశీర్షికలు';
    };
  };
  readonly th: {
    readonly buttons: {
      readonly play: 'เล่น';
      readonly pause: 'หยุดชั่วคราว';
      readonly replay: 'เล่นซ้ำ';
      readonly mute: 'ปิดเสียง';
      readonly unmute: 'ยกเลิกการปิดเสียง';
    };
    readonly seek: {
      readonly forward: 'ข้ามไปข้างหน้า {seconds} วินาที';
      readonly backward: 'ข้ามไปข้างหลัง {seconds} วินาที';
    };
    readonly fullscreen: {
      readonly enter: 'แบบเต็มหน้าจอ';
      readonly exit: 'ออกจากเต็มหน้าจอ';
    };
    readonly captions: {
      readonly enable: 'เปิดคำบรรยาย';
      readonly disable: 'ปิดคำบรรยาย';
    };
    readonly pip: {
      readonly enter: 'การเล่นภาพควบคู่';
      readonly exit: 'ออกจากการเล่นภาพควบคู่';
    };
    readonly live: {
      readonly playing: 'กำลังถ่ายทอดสด';
      readonly seekToEdge: 'ไปยังจุดถ่ายทอดสด';
      readonly badge: 'ถ่ายทอดสด';
    };
    readonly cast: {
      readonly start: 'เริ่มแคสต์';
      readonly stop: 'หยุดแคสต์';
      readonly connecting: 'กำลังเชื่อมต่อ';
    };
    readonly airplay: {
      readonly start: 'เริ่ม AirPlay';
      readonly stop: 'หยุด AirPlay';
    };
    readonly slider: {
      readonly seek: 'ค้นหา';
    };
    readonly time: {
      readonly current: 'เวลาปัจจุบัน';
      readonly duration: 'ระยะเวลา';
      readonly remaining: 'เวลาที่เหลือ';
      readonly remainingSuffix: 'เหลือ {duration}';
      readonly showElapsed: '{duration}. แสดงเวลาที่ผ่านไป.';
      readonly showDuration: '{duration}. แสดงระยะเวลา.';
      readonly showRemaining: '{duration}. แสดงเวลาที่เหลือ.';
      readonly position: '{current} ของ {duration}';
    };
    readonly playback: {
      readonly rate: 'อัตราการเล่น {rate}';
    };
    readonly volume: {
      readonly mutedValue: '{percent}, ปิดเสียง';
      readonly muted: 'ปิดเสียงแล้ว';
      readonly label: 'ระดับเสียง';
      readonly value: 'ระดับเสียง {value}';
    };
    readonly status: {
      readonly captionsOn: 'เปิดคำอธิบายภาพ';
      readonly captionsOff: 'ปิดคำอธิบายภาพ';
      readonly paused: 'หยุดชั่วคราว';
      readonly playing: 'กำลังเล่น';
      readonly fullscreen: 'เต็มหน้าจอ';
      readonly pip: 'ภาพซ้อนภาพ';
      readonly exitPip: 'ออกจากภาพซ้อนภาพ';
      readonly seekedTo: 'เลื่อนไปที่ {time}';
    };
    readonly container: {
      readonly label: 'เครื่องเล่นสื่อ';
    };
    readonly errors: {
      readonly aborted: 'คุณยกเลิกการเล่นสื่อแล้ว';
      readonly network: 'ข้อผิดพลาดของเครือข่ายทำให้การดาวน์โหลดสื่อไม่สำเร็จเป็นบางส่วน';
      readonly decode: 'การเล่นสื่อถูกยกเลิกเนื่องจากปัญหาเกี่ยวกับความเสียหาย หรือเนื่องจากสื่อใช้ฟีเจอร์ที่เบราว์เซอร์ของคุณไม่รองรับ';
      readonly source: 'ไม่สามารถโหลดสื่อได้ โดยอาจเป็นเพราะเซิร์ฟเวอร์หรือเครือข่ายล้มเหลว หรือเพราะรูปแบบไม่ได้รับการรองรับ';
      readonly encrypted: 'สื่อถูกเข้ารหัสลับแล้ว และเราไม่มีคีย์ที่จะถอดรหัสลับดังกล่าว';
      readonly title: 'เกิดข้อผิดพลาด';
      readonly unexpected: 'เกิดข้อผิดพลาด กรุณาลองอีกครั้ง';
    };
    readonly common: {
      readonly empty: '';
      readonly ok: 'ปิด';
    };
    readonly menu: {
      readonly settings: 'การตั้งค่า';
      readonly quality: 'คุณภาพ';
      readonly audio: 'เสียง';
      readonly default: 'ค่าเริ่มต้น';
      readonly speed: 'ความเร็ว';
      readonly captions: 'คำบรรยาย';
      readonly playbackRate: 'อัตราการเล่น';
      readonly back: 'กลับ';
      readonly off: 'ปิด';
      readonly auto: 'อัตโนมัติ';
      readonly autoWithLabel: 'อัตโนมัติ ({label})';
      readonly subtitles: 'คำบรรยาย';
    };
  };
  readonly tr: {
    readonly buttons: {
      readonly play: 'Oynat';
      readonly pause: 'Duraklat';
      readonly replay: 'Yeniden Oynat';
      readonly mute: 'Sessiz';
      readonly unmute: 'Sesi Aç';
    };
    readonly seek: {
      readonly forward: '{seconds} saniye ileri sar';
      readonly backward: '{seconds} saniye geri sar';
    };
    readonly fullscreen: {
      readonly enter: 'Tam Ekran';
      readonly exit: 'Tam ekrandan çık';
    };
    readonly captions: {
      readonly enable: 'Altyazıları aç';
      readonly disable: 'Altyazıları kapat';
    };
    readonly pip: {
      readonly enter: 'Mini oynatıcı';
      readonly exit: 'Mini oynatıcıdan çık';
    };
    readonly live: {
      readonly playing: 'Canlı oynatılıyor';
      readonly seekToEdge: 'Canlıya git';
      readonly badge: 'Canlı';
    };
    readonly cast: {
      readonly start: 'Yansıtmayı başlat';
      readonly stop: 'Yansıtmayı durdur';
      readonly connecting: 'Bağlanıyor';
    };
    readonly airplay: {
      readonly start: "AirPlay'i başlat";
      readonly stop: "AirPlay'i durdur";
    };
    readonly slider: {
      readonly seek: 'Ara';
    };
    readonly time: {
      readonly current: 'Süre';
      readonly duration: 'Toplam Süre';
      readonly remaining: 'Kalan Süre';
      readonly remainingSuffix: '{duration} kaldı';
      readonly showElapsed: '{duration}. Geçen süreyi göster.';
      readonly showDuration: '{duration}. Süreyi göster.';
      readonly showRemaining: '{duration}. Kalan süreyi göster.';
      readonly position: '{current} / {duration}';
    };
    readonly playback: {
      readonly rate: 'Oynatma Hızı {rate}';
    };
    readonly volume: {
      readonly mutedValue: '{percent}, sessiz';
      readonly muted: 'Sessiz';
      readonly label: 'Ses';
      readonly value: 'Ses {value}';
    };
    readonly status: {
      readonly captionsOn: 'Altyazılar açık';
      readonly captionsOff: 'Altyazılar kapalı';
      readonly paused: 'Duraklatıldı';
      readonly playing: 'Oynatılıyor';
      readonly fullscreen: 'Tam ekran';
      readonly pip: 'Resim içinde resim';
      readonly exitPip: 'Resim içinde resimden çık';
      readonly seekedTo: '{time} konumuna gidildi';
    };
    readonly container: {
      readonly label: 'Medya oynatıcı';
    };
    readonly errors: {
      readonly aborted: 'Medyayı oynatmayı iptal ettiniz';
      readonly network: 'Medya indirme işleminin kısmen başarısız olmasına neden olan bir ağ sorunu oluştu.';
      readonly decode: 'Medya oynatma, bir bozulma sorunu nedeniyle veya medya, tarayıcınızın desteklemediği özellikleri kullandığı için durduruldu.';
      readonly source: 'Sunucu veya ağ hatasından ya da biçim desteklenmediğinden medya yüklenemedi.';
      readonly encrypted: 'Medya, şifrelenmiş bir kaynaktan geliyor ve oynatmak için gerekli anahtar bulunamadı.';
      readonly title: 'Bir şeyler ters gitti.';
      readonly unexpected: 'Bir hata oluştu. Lütfen tekrar deneyin.';
    };
    readonly common: {
      readonly empty: '';
      readonly ok: 'Kapat';
    };
    readonly menu: {
      readonly settings: 'Ayarlar';
      readonly quality: 'Kalite';
      readonly audio: 'Ses';
      readonly default: 'Varsayılan';
      readonly speed: 'Hız';
      readonly captions: 'Altyazılar';
      readonly playbackRate: 'Oynatma hızı';
      readonly back: 'Geri';
      readonly off: 'Kapalı';
      readonly auto: 'Otomatik';
      readonly autoWithLabel: 'Otomatik ({label})';
      readonly subtitles: 'Altyazılar';
    };
  };
  readonly uk: {
    readonly buttons: {
      readonly play: 'Відтворити';
      readonly pause: 'Призупинити';
      readonly replay: 'Відтворити знову';
      readonly mute: 'Без звуку';
      readonly unmute: 'Зі звуком';
    };
    readonly seek: {
      readonly forward: 'Перемотати вперед на {seconds} с';
      readonly backward: 'Перемотати назад на {seconds} с';
    };
    readonly fullscreen: {
      readonly enter: 'Повноекранний режим';
      readonly exit: 'Вийти з повноекранного режиму';
    };
    readonly captions: {
      readonly enable: 'Увімкнути субтитри';
      readonly disable: 'Вимкнути субтитри';
    };
    readonly pip: {
      readonly enter: 'Зображення в зображенні';
      readonly exit: 'Вийти із режиму зображення в зображенні';
    };
    readonly live: {
      readonly playing: 'Прямий ефір';
      readonly seekToEdge: 'Перейти до прямого ефіру';
      readonly badge: 'На живо';
    };
    readonly cast: {
      readonly start: 'Почати трансляцію';
      readonly stop: 'Зупинити трансляцію';
      readonly connecting: 'Підключення';
    };
    readonly airplay: {
      readonly start: 'Запустити AirPlay';
      readonly stop: 'Зупинити AirPlay';
    };
    readonly slider: {
      readonly seek: 'Перемотка';
    };
    readonly time: {
      readonly current: 'Поточний час';
      readonly duration: 'Тривалість';
      readonly remaining: 'Час, що залишився';
      readonly remainingSuffix: 'Залишилось {duration}';
      readonly showElapsed: '{duration}. Показати минулий час.';
      readonly showDuration: '{duration}. Показати тривалість.';
      readonly showRemaining: '{duration}. Показати час, що залишився.';
      readonly position: '{current} з {duration}';
    };
    readonly playback: {
      readonly rate: 'Швидкість відтворення {rate}';
    };
    readonly volume: {
      readonly mutedValue: '{percent}, вимкнено';
      readonly muted: 'Вимкнено';
      readonly label: 'Гучність';
      readonly value: 'Гучність {value}';
    };
    readonly status: {
      readonly captionsOn: 'Підписи увімкнено';
      readonly captionsOff: 'Підписи вимкнено';
      readonly paused: 'На паузі';
      readonly playing: 'Відтворення';
      readonly fullscreen: 'Повноекранний режим';
      readonly pip: 'Зображення в зображенні';
      readonly exitPip: 'Вийти із режиму зображення в зображенні';
      readonly seekedTo: 'Перехід до позначки {time}';
    };
    readonly container: {
      readonly label: 'Медіапрогравач';
    };
    readonly errors: {
      readonly aborted: 'Ви припинили відтворення відео';
      readonly network: 'Помилка мережі викликала збій під час завантаження відео.';
      readonly decode: "Відтворення відео було припинено через пошкодження або у зв'язку з тим, що відео використовує функції, які не підтримуються вашим браузером.";
      readonly source: 'Неможливо завантажити відео через мережевий чи серверний збій або формат не підтримується.';
      readonly encrypted: 'Відео в зашифрованому вигляді, і ми не маємо ключі для розшифровки.';
      readonly title: 'Щось пішло не так.';
      readonly unexpected: 'Сталася помилка. Будь ласка, спробуйте ще раз.';
    };
    readonly common: {
      readonly empty: '';
      readonly ok: 'Закрити';
    };
    readonly menu: {
      readonly settings: 'Налаштування';
      readonly quality: 'Якість';
      readonly audio: 'Аудіо';
      readonly default: 'За замовчуванням';
      readonly speed: 'Швидкість';
      readonly captions: 'Субтитри';
      readonly playbackRate: 'Швидкість відтворення';
      readonly back: 'Назад';
      readonly off: 'Вимкнено';
      readonly auto: 'Авто';
      readonly autoWithLabel: 'Авто ({label})';
      readonly subtitles: 'Субтитри';
    };
  };
  readonly vi: {
    readonly buttons: {
      readonly play: 'Phát';
      readonly pause: 'Tạm dừng';
      readonly replay: 'Phát lại';
      readonly mute: 'Tắt tiếng';
      readonly unmute: 'Bật âm thanh';
    };
    readonly seek: {
      readonly forward: 'Tua tới {seconds} giây';
      readonly backward: 'Tua lại {seconds} giây';
    };
    readonly fullscreen: {
      readonly enter: 'Toàn màn hình';
      readonly exit: 'Thoát toàn màn hình';
    };
    readonly captions: {
      readonly enable: 'Bật phụ đề';
      readonly disable: 'Tắt chú thích';
    };
    readonly pip: {
      readonly enter: 'Màn hình trong màn hình';
      readonly exit: 'Thoát màn hình trong màn hình';
    };
    readonly live: {
      readonly playing: 'Đang phát trực tiếp';
      readonly seekToEdge: 'Tua tới trực tiếp';
      readonly badge: 'Trực tiếp';
    };
    readonly cast: {
      readonly start: 'Bắt đầu truyền phát';
      readonly stop: 'Dừng truyền phát';
      readonly connecting: 'Đang kết nối';
    };
    readonly airplay: {
      readonly start: 'Bắt đầu AirPlay';
      readonly stop: 'Dừng AirPlay';
    };
    readonly slider: {
      readonly seek: 'Tua';
    };
    readonly time: {
      readonly current: 'Thời gian hiện tại';
      readonly duration: 'Độ dài';
      readonly remaining: 'Thời gian còn lại';
      readonly remainingSuffix: 'Còn {duration}';
      readonly showElapsed: '{duration}. Hiển thị thời gian đã phát.';
      readonly showDuration: '{duration}. Hiển thị thời lượng.';
      readonly showRemaining: '{duration}. Hiển thị thời gian còn lại.';
      readonly position: '{current} của {duration}';
    };
    readonly playback: {
      readonly rate: 'Tỉ lệ phát lại {rate}';
    };
    readonly volume: {
      readonly mutedValue: '{percent}, đã tắt tiếng';
      readonly muted: 'Đã tắt tiếng';
      readonly label: 'Âm lượng';
      readonly value: 'Âm lượng {value}';
    };
    readonly status: {
      readonly captionsOn: 'Bật chú thích';
      readonly captionsOff: 'Tắt chú thích';
      readonly paused: 'Đã tạm dừng';
      readonly playing: 'Đang phát';
      readonly fullscreen: 'Toàn màn hình';
      readonly pip: 'Màn hình trong màn hình';
      readonly exitPip: 'Thoát màn hình trong màn hình';
      readonly seekedTo: 'Đã chuyển đến {time}';
    };
    readonly container: {
      readonly label: 'Trình phát đa phương tiện';
    };
    readonly errors: {
      readonly aborted: 'Bạn đã hủy việc phát lại media.';
      readonly network: 'Một lỗi mạng dẫn đến việc tải media bị lỗi.';
      readonly decode: 'Phát media đã bị hủy do một sai lỗi hoặc media sử dụng những tính năng trình duyệt không hỗ trợ.';
      readonly source: 'Video không tải được, mạng hay server có lỗi hoặc định dạng không được hỗ trợ.';
      readonly encrypted: 'Media đã được mã hóa và chúng tôi không có khóa để giải mã.';
      readonly title: 'Đã xảy ra lỗi.';
      readonly unexpected: 'Đã xảy ra lỗi. Vui lòng thử lại.';
    };
    readonly common: {
      readonly empty: '';
      readonly ok: 'Đóng';
    };
    readonly menu: {
      readonly settings: 'Cài đặt';
      readonly quality: 'Chất lượng';
      readonly audio: 'Âm thanh';
      readonly default: 'Mặc định';
      readonly speed: 'Tốc độ';
      readonly captions: 'Phụ đề';
      readonly playbackRate: 'Tốc độ phát lại';
      readonly back: 'Quay lại';
      readonly off: 'Tắt';
      readonly auto: 'Tự động';
      readonly autoWithLabel: 'Tự động ({label})';
      readonly subtitles: 'Phụ đề';
    };
  };
  readonly 'zh-CN': {
    readonly buttons: {
      readonly play: '播放';
      readonly pause: '暂停';
      readonly replay: '重新播放';
      readonly mute: '静音';
      readonly unmute: '开启音效';
    };
    readonly seek: {
      readonly forward: '快进 {seconds} 秒';
      readonly backward: '快退 {seconds} 秒';
    };
    readonly fullscreen: {
      readonly enter: '全屏';
      readonly exit: '退出全屏';
    };
    readonly captions: {
      readonly enable: '开启字幕';
      readonly disable: '关闭字幕';
    };
    readonly pip: {
      readonly enter: '画中画';
      readonly exit: '退出画中画';
    };
    readonly live: {
      readonly playing: '正在直播';
      readonly seekToEdge: '跳转到直播';
      readonly badge: '直播';
    };
    readonly cast: {
      readonly start: '开始投屏';
      readonly stop: '停止投屏';
      readonly connecting: '正在连接';
    };
    readonly airplay: {
      readonly start: '启动 AirPlay';
      readonly stop: '停止 AirPlay';
    };
    readonly slider: {
      readonly seek: '定位';
    };
    readonly time: {
      readonly current: '当前时间';
      readonly duration: '时长';
      readonly remaining: '剩余时间';
      readonly remainingSuffix: '剩余 {duration}';
      readonly showElapsed: '{duration}. 显示已播放时间.';
      readonly showDuration: '{duration}. 显示时长.';
      readonly showRemaining: '{duration}. 显示剩余时间.';
      readonly position: '{current}，总时长 {duration}';
    };
    readonly playback: {
      readonly rate: '播放速度 {rate}';
    };
    readonly volume: {
      readonly mutedValue: '{percent}，已静音';
      readonly muted: '已静音';
      readonly label: '音量';
      readonly value: '音量 {value}';
    };
    readonly status: {
      readonly captionsOn: '字幕已开启';
      readonly captionsOff: '字幕已关闭';
      readonly paused: '已暂停';
      readonly playing: '正在播放';
      readonly fullscreen: '全屏';
      readonly pip: '画中画';
      readonly exitPip: '退出画中画';
      readonly seekedTo: '已跳转至 {time}';
    };
    readonly container: {
      readonly label: '媒体播放器';
    };
    readonly errors: {
      readonly aborted: '视频播放被终止';
      readonly network: '网络错误导致视频下载中途失败。';
      readonly decode: '由于视频文件损坏或是该视频使用了你的浏览器不支持的功能，播放终止。';
      readonly source: '视频因格式不支持或者服务器或网络的问题无法加载。';
      readonly encrypted: '视频已加密，无法解密。';
      readonly title: '出现问题。';
      readonly unexpected: '发生错误，请重试。';
    };
    readonly common: {
      readonly empty: '';
      readonly ok: '关闭';
    };
    readonly menu: {
      readonly settings: '设置';
      readonly quality: '画质';
      readonly audio: '音频';
      readonly default: '默认';
      readonly speed: '速度';
      readonly captions: '字幕';
      readonly playbackRate: '播放速度';
      readonly back: '返回';
      readonly off: '关闭';
      readonly auto: '自动';
      readonly autoWithLabel: '自动（{label}）';
      readonly subtitles: '字幕';
    };
  };
  readonly 'zh-TW': {
    readonly buttons: {
      readonly play: '播放';
      readonly pause: '暫停';
      readonly replay: '重播';
      readonly mute: '靜音';
      readonly unmute: '開啟音效';
    };
    readonly seek: {
      readonly forward: '快轉 {seconds} 秒';
      readonly backward: '倒轉 {seconds} 秒';
    };
    readonly fullscreen: {
      readonly enter: '全螢幕';
      readonly exit: '退出全螢幕';
    };
    readonly captions: {
      readonly enable: '開啟字幕';
      readonly disable: '關閉字幕';
    };
    readonly pip: {
      readonly enter: '子母畫面';
      readonly exit: '離開子母畫面';
    };
    readonly live: {
      readonly playing: '正在直播';
      readonly seekToEdge: '跳轉至直播';
      readonly badge: '直播';
    };
    readonly cast: {
      readonly start: '開始投屏';
      readonly stop: '停止投屏';
      readonly connecting: '連線中';
    };
    readonly airplay: {
      readonly start: '啟動 AirPlay';
      readonly stop: '停止 AirPlay';
    };
    readonly slider: {
      readonly seek: '定位';
    };
    readonly time: {
      readonly current: '目前時間';
      readonly duration: '總共時間';
      readonly remaining: '剩餘時間';
      readonly remainingSuffix: '剩餘 {duration}';
      readonly showElapsed: '{duration}. 顯示已播放時間.';
      readonly showDuration: '{duration}. 顯示時長.';
      readonly showRemaining: '{duration}. 顯示剩餘時間.';
      readonly position: '{current}，總時長 {duration}';
    };
    readonly playback: {
      readonly rate: '播放速率 {rate}';
    };
    readonly volume: {
      readonly mutedValue: '{percent}，已靜音';
      readonly muted: '已靜音';
      readonly label: '音量';
      readonly value: '音量 {value}';
    };
    readonly status: {
      readonly captionsOn: '字幕已開啟';
      readonly captionsOff: '字幕已關閉';
      readonly paused: '已暫停';
      readonly playing: '正在播放';
      readonly fullscreen: '全螢幕';
      readonly pip: '子母畫面';
      readonly exitPip: '離開子母畫面';
      readonly seekedTo: '已跳轉至 {time}';
    };
    readonly container: {
      readonly label: '媒體播放器';
    };
    readonly errors: {
      readonly aborted: '影片播放已終止';
      readonly network: '網路錯誤導致影片下載失敗。';
      readonly decode: '由於影片檔案損毀或是該影片使用了您的瀏覽器不支援的功能，已終止播放媒體。';
      readonly source: '因格式不支援、伺服器或網路的問題無法載入媒體。';
      readonly encrypted: '媒體已加密，無法解密。';
      readonly title: '發生問題。';
      readonly unexpected: '發生錯誤，請重試。';
    };
    readonly common: {
      readonly empty: '';
      readonly ok: '關閉';
    };
    readonly menu: {
      readonly settings: '設定';
      readonly quality: '畫質';
      readonly audio: '音訊';
      readonly default: '預設';
      readonly speed: '速度';
      readonly captions: '字幕';
      readonly playbackRate: '播放速率';
      readonly back: '返回';
      readonly off: '關閉';
      readonly auto: '自動';
      readonly autoWithLabel: '自動（{label}）';
      readonly subtitles: '字幕';
    };
  };
  readonly pt: {
    readonly buttons: {
      readonly play: 'Tocar';
      readonly pause: 'Pausar';
      readonly replay: 'Tocar novamente';
      readonly mute: 'Mudo';
      readonly unmute: 'Ativar o som';
    };
    readonly seek: {
      readonly forward: 'Avançar {seconds} segundos';
      readonly backward: 'Retroceder {seconds} segundos';
    };
    readonly fullscreen: {
      readonly enter: 'Tela Cheia';
      readonly exit: 'Sair da tela cheia';
    };
    readonly captions: {
      readonly enable: 'Ativar legendas';
      readonly disable: 'Desativar legendas';
    };
    readonly pip: {
      readonly enter: 'Picture-in-Picture';
      readonly exit: 'Sair de Picture-in-Picture';
    };
    readonly live: {
      readonly playing: 'Reproduzindo ao vivo';
      readonly seekToEdge: 'Ir para o ao vivo';
      readonly badge: 'Ao vivo';
    };
    readonly cast: {
      readonly start: 'Iniciar transmissão';
      readonly stop: 'Parar transmissão';
      readonly connecting: 'Conectando';
    };
    readonly airplay: {
      readonly start: 'Iniciar AirPlay';
      readonly stop: 'Parar AirPlay';
    };
    readonly slider: {
      readonly seek: 'Buscar';
    };
    readonly time: {
      readonly current: 'Tempo';
      readonly duration: 'Duração';
      readonly remaining: 'Tempo Restante';
      readonly remainingSuffix: 'Restam {duration}';
      readonly showElapsed: '{duration}. Mostrar tempo decorrido.';
      readonly showDuration: '{duration}. Mostrar duração.';
      readonly showRemaining: '{duration}. Mostrar tempo restante.';
      readonly position: '{current} de {duration}';
    };
    readonly playback: {
      readonly rate: 'Velocidade {rate}';
    };
    readonly volume: {
      readonly mutedValue: '{percent}, silenciado';
      readonly muted: 'Silenciado';
      readonly label: 'Nível de volume';
      readonly value: 'Nível de volume {value}';
    };
    readonly status: {
      readonly captionsOn: 'Legendas ativadas';
      readonly captionsOff: 'Legendas desativadas';
      readonly paused: 'Pausado';
      readonly playing: 'Reproduzindo';
      readonly fullscreen: 'Tela cheia';
      readonly pip: 'Picture-in-picture';
      readonly exitPip: 'Sair do picture-in-picture';
      readonly seekedTo: 'Posição alterada para {time}';
    };
    readonly container: {
      readonly label: 'Reprodutor de mídia';
    };
    readonly errors: {
      readonly aborted: 'Você parou a execução do vídeo.';
      readonly network: 'Um erro na rede causou falha durante o download da mídia.';
      readonly decode: 'A reprodução foi interrompida devido à um problema de mídia corrompida ou porque a mídia utiliza funções que seu navegador não suporta.';
      readonly source: 'A mídia não pode ser carregada, por uma falha de rede ou servidor ou o formato não é suportado.';
      readonly encrypted: 'A mídia está criptografada e não temos as chaves para descriptografar.';
      readonly title: 'Algo deu errado.';
      readonly unexpected: 'Ocorreu um erro. Tente novamente.';
    };
    readonly common: {
      readonly empty: '';
      readonly ok: 'Fechar';
    };
    readonly menu: {
      readonly settings: 'Configurações';
      readonly quality: 'Qualidade';
      readonly audio: 'Áudio';
      readonly default: 'Padrão';
      readonly speed: 'Velocidade';
      readonly captions: 'Legendas';
      readonly playbackRate: 'Velocidade de reprodução';
      readonly back: 'Voltar';
      readonly off: 'Desativado';
      readonly auto: 'Auto';
      readonly autoWithLabel: 'Auto ({label})';
      readonly subtitles: 'Legendas';
    };
  };
  readonly zh: {
    readonly buttons: {
      readonly play: '播放';
      readonly pause: '暂停';
      readonly replay: '重新播放';
      readonly mute: '静音';
      readonly unmute: '开启音效';
    };
    readonly seek: {
      readonly forward: '快进 {seconds} 秒';
      readonly backward: '快退 {seconds} 秒';
    };
    readonly fullscreen: {
      readonly enter: '全屏';
      readonly exit: '退出全屏';
    };
    readonly captions: {
      readonly enable: '开启字幕';
      readonly disable: '关闭字幕';
    };
    readonly pip: {
      readonly enter: '画中画';
      readonly exit: '退出画中画';
    };
    readonly live: {
      readonly playing: '正在直播';
      readonly seekToEdge: '跳转到直播';
      readonly badge: '直播';
    };
    readonly cast: {
      readonly start: '开始投屏';
      readonly stop: '停止投屏';
      readonly connecting: '正在连接';
    };
    readonly airplay: {
      readonly start: '启动 AirPlay';
      readonly stop: '停止 AirPlay';
    };
    readonly slider: {
      readonly seek: '定位';
    };
    readonly time: {
      readonly current: '当前时间';
      readonly duration: '时长';
      readonly remaining: '剩余时间';
      readonly remainingSuffix: '剩余 {duration}';
      readonly showElapsed: '{duration}. 显示已播放时间.';
      readonly showDuration: '{duration}. 显示时长.';
      readonly showRemaining: '{duration}. 显示剩余时间.';
      readonly position: '{current}，总时长 {duration}';
    };
    readonly playback: {
      readonly rate: '播放速度 {rate}';
    };
    readonly volume: {
      readonly mutedValue: '{percent}，已静音';
      readonly muted: '已静音';
      readonly label: '音量';
      readonly value: '音量 {value}';
    };
    readonly status: {
      readonly captionsOn: '字幕已开启';
      readonly captionsOff: '字幕已关闭';
      readonly paused: '已暂停';
      readonly playing: '正在播放';
      readonly fullscreen: '全屏';
      readonly pip: '画中画';
      readonly exitPip: '退出画中画';
      readonly seekedTo: '已跳转至 {time}';
    };
    readonly container: {
      readonly label: '媒体播放器';
    };
    readonly errors: {
      readonly aborted: '视频播放被终止';
      readonly network: '网络错误导致视频下载中途失败。';
      readonly decode: '由于视频文件损坏或是该视频使用了你的浏览器不支持的功能，播放终止。';
      readonly source: '视频因格式不支持或者服务器或网络的问题无法加载。';
      readonly encrypted: '视频已加密，无法解密。';
      readonly title: '出现问题。';
      readonly unexpected: '发生错误，请重试。';
    };
    readonly common: {
      readonly empty: '';
      readonly ok: '关闭';
    };
    readonly menu: {
      readonly settings: '设置';
      readonly quality: '画质';
      readonly audio: '音频';
      readonly default: '默认';
      readonly speed: '速度';
      readonly captions: '字幕';
      readonly playbackRate: '播放速度';
      readonly back: '返回';
      readonly off: '关闭';
      readonly auto: '自动';
      readonly autoWithLabel: '自动（{label}）';
      readonly subtitles: '字幕';
    };
  };
};
type LocaleTag = keyof typeof all;
/** BCP 47 tags for every pack in {@link all}. */
declare const localeTags: LocaleTag[];
//#endregion
export { LocaleTag, all, localeTags };
//# sourceMappingURL=all.d.ts.map