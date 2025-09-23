const verses = {
    joy: [
      { ref: 'Nehemiah 8:10', text: `Do not sorrow, for the joy of the Lord is your strength.` },
      { ref: 'Psalm 16:11', text: `In Your presence is fullness of joy; At Your right hand are pleasures forevermore.` },
      { ref: 'John 15:11', text: `These things I have spoken to you, that My joy may remain in you, and that your joy may be full.` },
      { ref: 'Romans 15:13', text: `Now may the God of hope fill you with all joy and peace in believing, that you may abound in hope by the power of the Holy Spirit.` },
      { ref: '1 Peter 1:8', text: `Though now you do not see Him, yet believing, you rejoice with joy inexpressible and full of glory.` },
      { ref: 'Isaiah 55:12', text: `For you shall go out with joy, And be led out with peace; The mountains and the hills shall break forth into singing before you.` },
      { ref: 'Psalm 30:5', text: `Weeping may endure for a night, But joy comes in the morning.` },
      { ref: 'Habakkuk 3:18', text: `Yet I will rejoice in the Lord, I will joy in the God of my salvation.` },
      { ref: 'Psalm 126:5', text: `Those who sow in tears Shall reap in joy.` },
      { ref: 'Philippians 4:4', text: `Rejoice in the Lord always. Again I will say, rejoice!` }
    ],
  
    peace: [
      { ref: 'John 14:27', text: `Peace I leave with you, My peace I give to you; not as the world gives do I give to you. Let not your heart be troubled, neither let it be afraid.` },
      { ref: 'Philippians 4:7', text: `And the peace of God, which surpasses all understanding, will guard your hearts and minds through Christ Jesus.` },
      { ref: 'Isaiah 26:3', text: `You will keep him in perfect peace, Whose mind is stayed on You, Because he trusts in You.` },
      { ref: 'Romans 5:1', text: `Therefore, having been justified by faith, we have peace with God through our Lord Jesus Christ.` },
      { ref: 'Colossians 3:15', text: `And let the peace of God rule in your hearts, to which also you were called in one body; and be thankful.` },
      { ref: 'Psalm 4:8', text: `I will both lie down in peace, and sleep; For You alone, O Lord, make me dwell in safety.` },
      { ref: '2 Thessalonians 3:16', text: `Now may the Lord of peace Himself give you peace always in every way. The Lord be with you all.` },
      { ref: 'Matthew 11:28-29', text: `Come to Me, all you who labor and are heavy laden, and I will give you rest. Take My yoke upon you and learn from Me, for I am gentle and lowly in heart, and you will find rest for your souls.` },
      { ref: 'Proverbs 16:7', text: `When a man's ways please the Lord, He makes even his enemies to be at peace with him.` },
      { ref: 'Isaiah 9:6', text: `For unto us a Child is born, Unto us a Son is given; ... And His name will be called Wonderful, Counselor, Mighty God, Everlasting Father, Prince of Peace.` }
    ],
  
    hope: [
      { ref: 'Jeremiah 29:11', text: `For I know the thoughts that I think toward you, says the Lord, thoughts of peace and not of evil, to give you a future and a hope.` },
      { ref: 'Romans 15:13', text: `Now may the God of hope fill you with all joy and peace in believing, that you may abound in hope by the power of the Holy Spirit.` },
      { ref: 'Hebrews 11:1', text: `Now faith is the substance of things hoped for, the evidence of things not seen.` },
      { ref: 'Psalm 39:7', text: `And now, Lord, what do I wait for? My hope is in You.` },
      { ref: '1 Peter 1:3', text: `Blessed be the God and Father of our Lord Jesus Christ, who according to His abundant mercy has begotten us again to a living hope through the resurrection of Jesus Christ from the dead.` },
      { ref: 'Lamentations 3:24', text: `The Lord is my portion, says my soul, Therefore I hope in Him!` },
      { ref: 'Romans 8:24-25', text: `For we were saved in this hope, but hope that is seen is not hope; ... But if we hope for what we do not see, we eagerly wait for it with perseverance.` },
      { ref: 'Psalm 71:14', text: `But I will hope continually, And will praise You yet more and more.` },
      { ref: 'Titus 2:13', text: `Looking for the blessed hope and glorious appearing of our great God and Savior Jesus Christ.` },
      { ref: 'Colossians 1:27', text: `Christ in you, the hope of glory.` }
    ],
  
    strength: [
      { ref: 'Isaiah 40:31', text: `But those who wait on the Lord Shall renew their strength; They shall mount up with wings like eagles, They shall run and not be weary, They shall walk and not faint.` },
      { ref: 'Philippians 4:13', text: `I can do all things through Christ who strengthens me.` },
      { ref: 'Psalm 46:1', text: `God is our refuge and strength, A very present help in trouble.` },
      { ref: '2 Corinthians 12:9', text: `My grace is sufficient for you, for My strength is made perfect in weakness.` },
      { ref: 'Joshua 1:9', text: `Be strong and of good courage; do not be afraid, nor be dismayed, for the Lord your God is with you wherever you go.` },
      { ref: 'Ephesians 6:10', text: `Finally, my brethren, be strong in the Lord and in the power of His might.` },
      { ref: 'Psalm 18:32', text: `It is God who arms me with strength, And makes my way perfect.` },
      { ref: '1 Chronicles 16:11', text: `Seek the Lord and His strength; Seek His face evermore!` },
      { ref: 'Psalm 28:7', text: `The Lord is my strength and my shield; My heart trusted in Him, and I am helped.` },
      { ref: 'Habakkuk 3:19', text: `The Lord God is my strength; He will make my feet like deer's feet, And He will make me walk on my high hills.` }
    ],
  
    comfort: [
      { ref: '2 Corinthians 1:3-4', text: `Blessed be the God and Father of our Lord Jesus Christ, the Father of mercies and God of all comfort, who comforts us in all our tribulation…` },
      { ref: 'Psalm 23:4', text: `Yea, though I walk through the valley of the shadow of death, I will fear no evil; For You are with me; Your rod and Your staff, they comfort me.` },
      { ref: 'Matthew 5:4', text: `Blessed are those who mourn, For they shall be comforted.` },
      { ref: 'Isaiah 49:13', text: `Sing, O heavens! Be joyful, O earth! ... For the Lord has comforted His people, And will have mercy on His afflicted.` },
      { ref: 'Psalm 119:50', text: `This is my comfort in my affliction, For Your word has given me life.` },
      { ref: 'John 14:16', text: `And I will pray the Father, and He will give you another Helper, that He may abide with you forever.` },
      { ref: 'Isaiah 51:12', text: `I, even I, am He who comforts you. Who are you that you should be afraid of a man who will die?` },
      { ref: '2 Thessalonians 2:16-17', text: `Now may our Lord Jesus Christ Himself, and our God and Father… comfort your hearts and establish you in every good word and work.` },
      { ref: 'Psalm 94:19', text: `In the multitude of my anxieties within me, Your comforts delight my soul.` },
      { ref: 'Revelation 21:4', text: `And God will wipe away every tear from their eyes; there shall be no more death, nor sorrow, nor crying.` }
    ],
  
    faith: [
      { ref: 'Hebrews 11:1', text: `Now faith is the substance of things hoped for, the evidence of things not seen.` },
      { ref: '2 Corinthians 5:7', text: `For we walk by faith, not by sight.` },
      { ref: 'Ephesians 2:8', text: `For by grace you have been saved through faith, and that not of yourselves; it is the gift of God.` },
      { ref: 'Romans 10:17', text: `So then faith comes by hearing, and hearing by the word of God.` },
      { ref: 'Matthew 21:22', text: `And whatever things you ask in prayer, believing, you will receive.` },
      { ref: 'James 1:6', text: `But let him ask in faith, with no doubting, for he who doubts is like a wave of the sea driven and tossed by the wind.` },
      { ref: 'Mark 9:23', text: `Jesus said to him, "If you can believe, all things are possible to him who believes."` },
      { ref: 'Galatians 2:20', text: `I live by faith in the Son of God, who loved me and gave Himself for me.` },
      { ref: '1 Corinthians 16:13', text: `Watch, stand fast in the faith, be brave, be strong.` },
      { ref: 'Hebrews 11:6', text: `But without faith it is impossible to please Him, for he who comes to God must believe that He is, and that He is a rewarder of those who diligently seek Him.` }
    ],
  
    love: [
      { ref: '1 Corinthians 13:4-5', text: `Love suffers long and is kind; love does not envy; love does not parade itself, is not puffed up; does not behave rudely, does not seek its own, is not provoked, thinks no evil.` },
      { ref: '1 Corinthians 13:13', text: `And now abide faith, hope, love, these three; but the greatest of these is love.` },
      { ref: 'John 13:34', text: `A new commandment I give to you, that you love one another; as I have loved you, that you also love one another.` },
      { ref: 'Romans 13:10', text: `Love does no harm to a neighbor; therefore love is the fulfillment of the law.` },
      { ref: 'Colossians 3:14', text: `But above all these things put on love, which is the bond of perfection.` },
      { ref: '1 Peter 4:8', text: `And above all things have fervent love for one another, for "love will cover a multitude of sins."` },
      { ref: '1 John 4:7', text: `Beloved, let us love one another, for love is of God; and everyone who loves is born of God and knows God.` },
      { ref: 'John 15:13', text: `Greater love has no one than this, than to lay down one's life for his friends.` },
      { ref: 'Deuteronomy 6:5', text: `You shall love the Lord your God with all your heart, with all your soul, and with all your strength.` },
      { ref: 'Matthew 22:39', text: `You shall love your neighbor as yourself.` }
    ],
  
    wisdom: [
      { ref: 'James 1:5', text: `If any of you lacks wisdom, let him ask of God, who gives to all liberally and without reproach, and it will be given to him.` },
      { ref: 'Proverbs 1:7', text: `The fear of the Lord is the beginning of knowledge, But fools despise wisdom and instruction.` },
      { ref: 'Proverbs 3:13', text: `Happy is the man who finds wisdom, And the man who gains understanding.` },
      { ref: 'Ecclesiastes 7:12', text: `For wisdom is a defense as money is a defense, But the excellence of knowledge is that wisdom gives life to those who have it.` },
      { ref: 'Colossians 2:3', text: `In whom are hidden all the treasures of wisdom and knowledge.` },
      { ref: 'Proverbs 2:6', text: `For the Lord gives wisdom; From His mouth come knowledge and understanding.` },
      { ref: 'Ephesians 1:17', text: `That the God of our Lord Jesus Christ, the Father of glory, may give to you the spirit of wisdom and revelation in the knowledge of Him.` },
      { ref: 'Proverbs 4:7', text: `Wisdom is the principal thing; Therefore get wisdom. And in all your getting, get understanding.` },
      { ref: 'Daniel 2:21', text: `He gives wisdom to the wise And knowledge to those who have understanding.` },
      { ref: 'Proverbs 19:20', text: `Listen to counsel and receive instruction, That you may be wise in your latter days.` }
    ],
  
    courage: [
      { ref: 'Joshua 1:9', text: `Be strong and of good courage; do not be afraid, nor be dismayed, for the Lord your God is with you wherever you go.` },
      { ref: 'Deuteronomy 31:6', text: `Be strong and of good courage, do not fear nor be afraid of them; for the Lord your God, He is the One who goes with you.` },
      { ref: 'Psalm 27:14', text: `Wait on the Lord; Be of good courage, And He shall strengthen your heart; Wait, I say, on the Lord!` },
      { ref: '1 Corinthians 16:13', text: `Watch, stand fast in the faith, be brave, be strong.` },
      { ref: 'Isaiah 41:10', text: `Fear not, for I am with you; Be not dismayed, for I am your God.` },
      { ref: '2 Timothy 1:7', text: `For God has not given us a spirit of fear, but of power and of love and of a sound mind.` },
      { ref: 'Psalm 31:24', text: `Be of good courage, And He shall strengthen your heart, All you who hope in the Lord.` },
      { ref: 'Acts 23:11', text: `But the following night the Lord stood by him and said, "Be of good cheer, Paul; for as you have testified for Me in Jerusalem, so you must also bear witness at Rome."` },
      { ref: 'John 16:33', text: `In the world you will have tribulation; but be of good cheer, I have overcome the world.` },
      { ref: '2 Chronicles 32:7', text: `Be strong and courageous; do not be afraid nor dismayed before the king of Assyria, nor before all the multitude that is with him; for there are more with us than with him.` }
    ],
  
    healing: [
      { ref: 'Isaiah 53:5', text: `But He was wounded for our transgressions, He was bruised for our iniquities; The chastisement for our peace was upon Him, And by His stripes we are healed.` },
      { ref: 'Jeremiah 30:17', text: `For I will restore health to you And heal you of your wounds, says the Lord.` },
      { ref: 'Psalm 147:3', text: `He heals the brokenhearted And binds up their wounds.` },
      { ref: 'James 5:14-15', text: `Is anyone among you sick? Let him call for the elders of the church, and let them pray over him… And the prayer of faith will save the sick, and the Lord will raise him up.` },
      { ref: 'Exodus 15:26', text: `For I am the Lord who heals you.` },
      { ref: 'Matthew 9:35', text: `Then Jesus went about all the cities and villages, teaching in their synagogues, preaching the gospel of the kingdom, and healing every sickness and every disease among the people.` },
      { ref: 'Psalm 103:2-3', text: `Bless the Lord, O my soul, And forget not all His benefits: Who forgives all your iniquities, Who heals all your diseases.` },
      { ref: '1 Peter 2:24', text: `By whose stripes you were healed.` },
      { ref: 'Proverbs 4:20-22', text: `My son, give attention to my words; … For they are life to those who find them, And health to all their flesh.` },
      { ref: 'Mark 5:34', text: `And He said to her, "Daughter, your faith has made you well. Go in peace, and be healed of your affliction."` }
    ],
  
    guidance: [
      { ref: 'Proverbs 3:5-6', text: `Trust in the LORD with all thine heart; and lean not unto thine own understanding. In all thy ways acknowledge him, and he shall direct thy paths.` },
      { ref: 'Psalm 32:8', text: `I will instruct thee and teach thee in the way which thou shalt go: I will guide thee with mine eye.` },
      { ref: 'Psalm 119:105', text: `Thy word is a lamp unto my feet, and a light unto my path.` },
      { ref: 'Isaiah 30:21', text: `And thine ears shall hear a word behind thee, saying, This is the way, walk ye in it, when ye turn to the right hand, and when ye turn to the left.` },
      { ref: 'James 1:5', text: `If any of you lack wisdom, let him ask of God, that giveth to all men liberally, and upbraideth not; and it shall be given him.` },
      { ref: 'Psalm 25:12', text: `What man is he that feareth the LORD? him shall he teach in the way that he shall choose.` },
      { ref: 'Psalm 37:23', text: `The steps of a good man are ordered by the LORD: and he delighteth in his way.` },
      { ref: 'John 16:13', text: `Howbeit when he, the Spirit of truth, is come, he will guide you into all truth...` },
      { ref: 'Proverbs 16:9', text: `A man's heart deviseth his way: but the LORD directeth his steps.` },
      { ref: 'Isaiah 58:11', text: `And the LORD shall guide thee continually, and satisfy thy soul in drought...` }
    ],
  
    patience: [
      { ref: 'Romans 12:12', text: `Rejoicing in hope; patient in tribulation; continuing instant in prayer;` },
      { ref: 'James 1:3-4', text: `Knowing this, that the trying of your faith worketh patience. But let patience have her perfect work...` },
      { ref: 'Galatians 6:9', text: `And let us not be weary in well doing: for in due season we shall reap, if we faint not.` },
      { ref: 'Psalm 27:14', text: `Wait on the LORD: be of good courage, and he shall strengthen thine heart: wait, I say, on the LORD.` },
      { ref: 'Lamentations 3:25-26', text: `The LORD is good unto them that wait for him... It is good that a man should both hope and quietly wait for the salvation of the LORD.` },
      { ref: 'Hebrews 6:12', text: `That ye be not slothful, but followers of them who through faith and patience inherit the promises.` },
      { ref: 'Romans 5:3-4', text: `Tribulation worketh patience; And patience, experience; and experience, hope.` },
      { ref: 'Colossians 1:11', text: `Strengthened with all might... unto all patience and longsuffering with joyfulness;` },
      { ref: 'Ecclesiastes 7:8', text: `Better is the end of a thing than the beginning thereof: and the patient in spirit is better than the proud in spirit.` },
      { ref: 'James 5:7-8', text: `Be patient therefore, brethren, unto the coming of the Lord... be ye also patient; stablish your hearts...` }
    ],
  
    gratitude: [
      { ref: '1 Thessalonians 5:18', text: `In every thing give thanks: for this is the will of God in Christ Jesus concerning you.` },
      { ref: 'Psalm 100:4', text: `Enter into his gates with thanksgiving, and into his courts with praise: be thankful unto him, and bless his name.` },
      { ref: 'Philippians 4:6', text: `Be careful for nothing; but in every thing by prayer and supplication with thanksgiving let your requests be made known unto God.` },
      { ref: 'Colossians 3:17', text: `And whatsoever ye do in word or deed, do all in the name of the Lord Jesus, giving thanks to God and the Father by him.` },
      { ref: 'Psalm 107:1', text: `O give thanks unto the LORD, for he is good: for his mercy endureth for ever.` },
      { ref: 'Ephesians 5:20', text: `Giving thanks always for all things unto God and the Father in the name of our Lord Jesus Christ;` },
      { ref: 'Psalm 118:24', text: `This is the day which the LORD hath made; we will rejoice and be glad in it.` },
      { ref: 'Psalm 136:1', text: `O give thanks unto the LORD; for he is good: for his mercy endureth for ever.` },
      { ref: 'Hebrews 13:15', text: `By him therefore let us offer the sacrifice of praise to God continually, that is, the fruit of our lips giving thanks to his name.` },
      { ref: 'Jonah 2:9', text: `But I will sacrifice unto thee with the voice of thanksgiving; I will pay that that I have vowed. Salvation is of the LORD.` }
    ],
  
    forgiveness: [
      { ref: '1 John 1:9', text: `If we confess our sins, he is faithful and just to forgive us our sins, and to cleanse us from all unrighteousness.` },
      { ref: 'Ephesians 4:32', text: `And be ye kind one to another, tenderhearted, forgiving one another, even as God for Christ's sake hath forgiven you.` },
      { ref: 'Colossians 3:13', text: `Forbearing one another, and forgiving one another... even as Christ forgave you, so also do ye.` },
      { ref: 'Mark 11:25', text: `And when ye stand praying, forgive, if ye have ought against any...` },
      { ref: 'Matthew 6:14-15', text: `For if ye forgive men their trespasses, your heavenly Father will also forgive you...` },
      { ref: 'Psalm 103:12', text: `As far as the east is from the west, so far hath he removed our transgressions from us.` },
      { ref: 'Isaiah 1:18', text: `Though your sins be as scarlet, they shall be as white as snow...` },
      { ref: 'Micah 7:18-19', text: `Who is a God like unto thee, that pardoneth iniquity... thou wilt cast all their sins into the depths of the sea.` },
      { ref: 'Acts 3:19', text: `Repent ye therefore, and be converted, that your sins may be blotted out...` },
      { ref: 'Matthew 18:21-22', text: `I say not unto thee, Until seven times: but, Until seventy times seven.` }
    ],
  
    repentance: [
      { ref: 'Acts 17:30', text: `And the times of this ignorance God winked at; but now commandeth all men every where to repent:` },
      { ref: '2 Chronicles 7:14', text: `If my people, which are called by my name, shall humble themselves, and pray... then will I hear from heaven, and will forgive their sin, and will heal their land.` },
      { ref: 'Luke 13:3', text: `I tell you, Nay: but, except ye repent, ye shall all likewise perish.` },
      { ref: '2 Peter 3:9', text: `The Lord... is longsuffering to us-ward, not willing that any should perish, but that all should come to repentance.` },
      { ref: 'Joel 2:12-13', text: `Turn ye even to me with all your heart... and rend your heart, and not your garments...` },
      { ref: 'Proverbs 28:13', text: `He that covereth his sins shall not prosper: but whoso confesseth and forsaketh them shall have mercy.` },
      { ref: 'Psalm 51:10', text: `Create in me a clean heart, O God; and renew a right spirit within me.` },
      { ref: 'Isaiah 55:7', text: `Let the wicked forsake his way... and he will have mercy upon him; and to our God, for he will abundantly pardon.` },
      { ref: 'Matthew 4:17', text: `From that time Jesus began to preach, and to say, Repent: for the kingdom of heaven is at hand.` },
      { ref: 'Acts 3:19', text: `Repent ye therefore, and be converted, that your sins may be blotted out...` }
    ],
  
    protection: [
      { ref: 'Psalm 91:1-2', text: `He that dwelleth in the secret place of the most High shall abide under the shadow of the Almighty. I will say of the LORD, He is my refuge and my fortress: my God; in him will I trust.` },
      { ref: 'Psalm 121:7-8', text: `The LORD shall preserve thee from all evil: he shall preserve thy soul. The LORD shall preserve thy going out and thy coming in from this time forth, and even for evermore.` },
      { ref: '2 Thessalonians 3:3', text: `But the Lord is faithful, who shall stablish you, and keep you from evil.` },
      { ref: 'Isaiah 54:17', text: `No weapon that is formed against thee shall prosper; and every tongue that shall rise against thee in judgment thou shalt condemn...` },
      { ref: 'Proverbs 18:10', text: `The name of the LORD is a strong tower: the righteous runneth into it, and is safe.` },
      { ref: 'Psalm 34:7', text: `The angel of the LORD encampeth round about them that fear him, and delivereth them.` },
      { ref: 'Psalm 46:1', text: `God is our refuge and strength, a very present help in trouble.` },
      { ref: 'Nahum 1:7', text: `The LORD is good, a strong hold in the day of trouble; and he knoweth them that trust in him.` },
      { ref: 'Psalm 140:4', text: `Keep me, O LORD, from the hands of the wicked; preserve me from the violent man; who have purposed to overthrow my goings.` },
      { ref: 'Deuteronomy 31:6', text: `Be strong and of a good courage, fear not, nor be afraid of them: for the LORD thy God, he it is that doth go with thee; he will not fail thee, nor forsake thee.` }
    ],
  
    provision: [
      { ref: 'Philippians 4:19', text: `But my God shall supply all your need according to his riches in glory by Christ Jesus.` },
      { ref: 'Matthew 6:31-33', text: `Therefore take no thought, saying, What shall we eat? or, What shall we drink? ... But seek ye first the kingdom of God, and his righteousness; and all these things shall be added unto you.` },
      { ref: 'Psalm 34:10', text: `The young lions do lack, and suffer hunger: but they that seek the LORD shall not want any good thing.` },
      { ref: '2 Corinthians 9:8', text: `And God is able to make all grace abound toward you; that ye, always having all sufficiency in all things, may abound to every good work.` },
      { ref: 'Genesis 22:14', text: `And Abraham called the name of that place Jehovahjireh: as it is said to this day, In the mount of the LORD it shall be seen.` },
      { ref: 'Psalm 23:1', text: `The LORD is my shepherd; I shall not want.` },
      { ref: 'Deuteronomy 2:7', text: `For the LORD thy God hath blessed thee in all the works of thy hand...` },
      { ref: 'Malachi 3:10', text: `Bring ye all the tithes into the storehouse, that there may be meat in mine house...` },
      { ref: 'Psalm 37:25', text: `I have been young, and now am old; yet have I not seen the righteous forsaken, nor his seed begging bread.` },
      { ref: 'Luke 12:24', text: `Consider the ravens: for they neither sow nor reap; which neither have storehouse nor barn; and God feedeth them...` }
    ],
  
    rest: [
      { ref: 'Matthew 11:28', text: `Come unto me, all ye that labour and are heavy laden, and I will give you rest.` },
      { ref: 'Psalm 4:8', text: `I will both lay me down in peace, and sleep: for thou, LORD, only makest me dwell in safety.` },
      { ref: 'Exodus 33:14', text: `And he said, My presence shall go with thee, and I will give thee rest.` },
      { ref: 'Hebrews 4:9-10', text: `There remaineth therefore a rest to the people of God. For he that is entered into his rest, he also hath ceased from his own works, as God did from his.` },
      { ref: 'Psalm 23:2', text: `He maketh me to lie down in green pastures: he leadeth me beside the still waters.` },
      { ref: 'Jeremiah 6:16', text: `Thus saith the LORD, Stand ye in the ways, and see, and ask for the old paths... and ye shall find rest for your souls.` },
      { ref: 'Isaiah 30:15', text: `In returning and rest shall ye be saved; in quietness and in confidence shall be your strength...` },
      { ref: 'Mark 6:31', text: `And he said unto them, Come ye yourselves apart into a desert place, and rest a while...` },
      { ref: 'Psalm 37:7', text: `Rest in the LORD, and wait patiently for him...` },
      { ref: 'Revelation 14:13', text: `Blessed are the dead which die in the Lord from henceforth... that they may rest from their labours; and their works do follow them.` }
    ],
  
    trust: [
      { ref: 'Proverbs 3:5-6', text: `Trust in the LORD with all thine heart; and lean not unto thine own understanding. In all thy ways acknowledge him, and he shall direct thy paths.` },
      { ref: 'Psalm 37:5', text: `Commit thy way unto the LORD; trust also in him; and he shall bring it to pass.` },
      { ref: 'Isaiah 26:4', text: `Trust ye in the LORD for ever: for in the LORD JEHOVAH is everlasting strength.` },
      { ref: 'Jeremiah 17:7', text: `Blessed is the man that trusteth in the LORD, and whose hope the LORD is.` },
      { ref: 'Psalm 56:3', text: `What time I am afraid, I will trust in thee.` },
      { ref: 'Psalm 125:1', text: `They that trust in the LORD shall be as mount Zion, which cannot be removed, but abideth for ever.` },
      { ref: 'Nahum 1:7', text: `The LORD is good, a strong hold in the day of trouble; and he knoweth them that trust in him.` },
      { ref: 'Psalm 28:7', text: `The LORD is my strength and my shield; my heart trusted in him, and I am helped...` },
      { ref: 'Job 13:15', text: `Though he slay me, yet will I trust in him...` },
      { ref: 'Psalm 9:10', text: `And they that know thy name will put their trust in thee: for thou, LORD, hast not forsaken them that seek thee.` }
    ],
  
    salvation: [
      { ref: 'Romans 10:9', text: `That if thou shalt confess with thy mouth the Lord Jesus, and shalt believe in thine heart that God hath raised him from the dead, thou shalt be saved.` },
      { ref: 'Ephesians 2:8-9', text: `For by grace are ye saved through faith; and that not of yourselves: it is the gift of God: Not of works, lest any man should boast.` },
      { ref: 'Acts 4:12', text: `Neither is there salvation in any other: for there is none other name under heaven given among men, whereby we must be saved.` },
      { ref: 'Titus 3:5', text: `Not by works of righteousness which we have done, but according to his mercy he saved us...` },
      { ref: '2 Timothy 1:9', text: `Who hath saved us, and called us with an holy calling, not according to our works, but according to his own purpose and grace...` },
      { ref: 'John 3:16', text: `For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.` },
      { ref: 'Romans 1:16', text: `For I am not ashamed of the gospel of Christ: for it is the power of God unto salvation to every one that believeth...` },
      { ref: 'Hebrews 5:9', text: `And being made perfect, he became the author of eternal salvation unto all them that obey him;` },
      { ref: 'Isaiah 12:2', text: `Behold, God is my salvation; I will trust, and not be afraid...` },
      { ref: 'Luke 19:10', text: `For the Son of man is come to seek and to save that which was lost.` }
    ],
  
    mercy: [
      { ref: 'Lamentations 3:22-23', text: `It is of the LORD'S mercies that we are not consumed, because his compassions fail not. They are new every morning: great is thy faithfulness.` },
      { ref: 'Micah 6:8', text: `He hath shewed thee, O man, what is good; and what doth the LORD require of thee, but to do justly, and to love mercy, and to walk humbly with thy God?` },
      { ref: 'Psalm 103:8', text: `The LORD is merciful and gracious, slow to anger, and plenteous in mercy.` },
      { ref: 'Titus 3:5', text: `Not by works of righteousness which we have done, but according to his mercy he saved us...` },
      { ref: 'Ephesians 2:4-5', text: `But God, who is rich in mercy, for his great love wherewith he loved us, even when we were dead in sins, hath quickened us together with Christ...` },
      { ref: 'Psalm 136:1', text: `O give thanks unto the LORD; for he is good: for his mercy endureth for ever.` },
      { ref: 'Hebrews 4:16', text: `Let us therefore come boldly unto the throne of grace, that we may obtain mercy, and find grace to help in time of need.` },
      { ref: 'Psalm 86:5', text: `For thou, Lord, art good, and ready to forgive; and plenteous in mercy unto all them that call upon thee.` },
      { ref: 'James 2:13', text: `For he shall have judgment without mercy, that hath shewed no mercy; and mercy rejoiceth against judgment.` },
      { ref: 'Luke 6:36', text: `Be ye therefore merciful, as your Father also is merciful.` }
    ],
  
    grace: [
      { ref: '2 Corinthians 12:9', text: `My grace is sufficient for thee: for my strength is made perfect in weakness.` },
      { ref: 'Ephesians 2:8-9', text: `For by grace are ye saved through faith; and that not of yourselves: it is the gift of God: Not of works, lest any man should boast.` },
      { ref: 'Romans 6:14', text: `For sin shall not have dominion over you: for ye are not under the law, but under grace.` },
      { ref: 'Hebrews 4:16', text: `Let us therefore come boldly unto the throne of grace, that we may obtain mercy, and find grace to help in time of need.` },
      { ref: 'John 1:16', text: `And of his fulness have all we received, and grace for grace.` },
      { ref: 'Romans 5:15', text: `But not as the offence, so also is the free gift... much more the grace of God, and the gift by grace, which is by one man, Jesus Christ, hath abounded unto many.` },
      { ref: 'Titus 2:11', text: `For the grace of God that bringeth salvation hath appeared to all men,` },
      { ref: 'Acts 20:32', text: `And now, brethren, I commend you to God, and to the word of his grace, which is able to build you up...` },
      { ref: '1 Corinthians 15:10', text: `But by the grace of God I am what I am: and his grace which was bestowed upon me was not in vain...` },
      { ref: '2 Peter 3:18', text: `But grow in grace, and in the knowledge of our Lord and Saviour Jesus Christ.` }
    ],
  
    praise: [
      { ref: 'Psalm 150:6', text: `Let every thing that hath breath praise the LORD. Praise ye the LORD.` },
      { ref: 'Psalm 100:4', text: `Enter into his gates with thanksgiving, and into his courts with praise: be thankful unto him, and bless his name.` },
      { ref: 'Psalm 34:1', text: `I will bless the LORD at all times: his praise shall continually be in my mouth.` },
      { ref: 'Hebrews 13:15', text: `By him therefore let us offer the sacrifice of praise to God continually...` },
      { ref: 'Psalm 150:1', text: `Praise ye the LORD. Praise God in his sanctuary: praise him in the firmament of his power.` },
      { ref: 'Psalm 95:1', text: `O come, let us sing unto the LORD: let us make a joyful noise to the rock of our salvation.` },
      { ref: 'Isaiah 25:1', text: `O LORD, thou art my God; I will exalt thee, I will praise thy name...` },
      { ref: 'Psalm 147:1', text: `Praise ye the LORD: for it is good to sing praises unto our God...` },
      { ref: 'Exodus 15:2', text: `The LORD is my strength and song, and he is become my salvation: he is my God, and I will prepare him an habitation...` },
      { ref: 'Revelation 19:5', text: `Praise our God, all ye his servants, and ye that fear him, both small and great.` }
    ],
  
    thanksgiving: [
      { ref: '1 Thessalonians 5:18', text: `In every thing give thanks: for this is the will of God in Christ Jesus concerning you.` },
      { ref: 'Psalm 107:1', text: `O give thanks unto the LORD, for he is good: for his mercy endureth for ever.` },
      { ref: 'Colossians 3:17', text: `And whatsoever ye do in word or deed, do all in the name of the Lord Jesus, giving thanks to God and the Father by him.` },
      { ref: 'Ephesians 5:20', text: `Giving thanks always for all things unto God and the Father in the name of our Lord Jesus Christ;` },
      { ref: 'Psalm 136:1', text: `O give thanks unto the LORD; for he is good: for his mercy endureth for ever.` },
      { ref: 'Philippians 4:6', text: `Be careful for nothing; but in every thing by prayer and supplication with thanksgiving let your requests be made known unto God.` },
      { ref: 'Psalm 100:4', text: `Enter into his gates with thanksgiving, and into his courts with praise...` },
      { ref: 'Psalm 118:29', text: `O give thanks unto the LORD; for he is good: for his mercy endureth for ever.` },
      { ref: 'Jonah 2:9', text: `But I will sacrifice unto thee with the voice of thanksgiving; I will pay that that I have vowed. Salvation is of the LORD.` },
      { ref: 'Colossians 4:2', text: `Continue in prayer, and watch in the same with thanksgiving;` }
    ],
  
    humility: [
      { ref: 'James 4:10', text: `Humble yourselves in the sight of the Lord, and he shall lift you up.` },
      { ref: '1 Peter 5:6', text: `Humble yourselves therefore under the mighty hand of God, that he may exalt you in due time:` },
      { ref: 'Micah 6:8', text: `What doth the LORD require of thee, but to do justly, and to love mercy, and to walk humbly with thy God?` },
      { ref: 'Proverbs 22:4', text: `By humility and the fear of the LORD are riches, and honour, and life.` },
      { ref: 'Philippians 2:3', text: `Let nothing be done through strife or vainglory; but in lowliness of mind let each esteem other better than themselves.` },
      { ref: 'Matthew 23:12', text: `And whosoever shall exalt himself shall be abased; and he that shall humble himself shall be exalted.` },
      { ref: 'Colossians 3:12', text: `Put on therefore, as the elect of God, holy and beloved, bowels of mercies, kindness, humbleness of mind, meekness, longsuffering;` },
      { ref: 'Luke 14:11', text: `For whosoever exalteth himself shall be abased; and he that humbleth himself shall be exalted.` },
      { ref: 'Proverbs 11:2', text: `When pride cometh, then cometh shame: but with the lowly is wisdom.` },
      { ref: 'Isaiah 57:15', text: `I dwell in the high and holy place, with him also that is of a contrite and humble spirit...` }
    ],
  
    purity: [
      { ref: 'Matthew 5:8', text: `Blessed are the pure in heart: for they shall see God.` },
      { ref: '1 Timothy 4:12', text: `Let no man despise thy youth; but be thou an example of the believers, in word, in conversation, in charity, in spirit, in faith, in purity.` },
      { ref: 'Psalm 24:3-4', text: `Who shall ascend into the hill of the LORD? or who shall stand in his holy place? He that hath clean hands, and a pure heart...` },
      { ref: 'Philippians 4:8', text: `Whatsoever things are true, whatsoever things are honest, whatsoever things are just... think on these things.` },
      { ref: '1 John 3:3', text: `And every man that hath this hope in him purifieth himself, even as he is pure.` },
      { ref: '2 Timothy 2:22', text: `Flee also youthful lusts: but follow righteousness, faith, charity, peace...` },
      { ref: 'Proverbs 22:11', text: `He that loveth pureness of heart, for the grace of his lips the king shall be his friend.` },
      { ref: 'Psalm 51:10', text: `Create in me a clean heart, O God; and renew a right spirit within me.` },
      { ref: 'James 3:17', text: `But the wisdom that is from above is first pure, then peaceable, gentle, and easy to be intreated...` },
      { ref: 'Titus 1:15', text: `Unto the pure all things are pure: but unto them that are defiled and unbelieving is nothing pure...` }
    ],
  
    righteousness: [
      { ref: 'Matthew 6:33', text: `But seek ye first the kingdom of God, and his righteousness; and all these things shall be added unto you.` },
      { ref: 'Romans 3:22', text: `Even the righteousness of God which is by faith of Jesus Christ unto all and upon all them that believe...` },
      { ref: 'Proverbs 21:21', text: `He that followeth after righteousness and mercy findeth life, righteousness, and honour.` },
      { ref: 'Isaiah 64:6', text: `But we are all as an unclean thing, and all our righteousnesses are as filthy rags...` },
      { ref: 'Romans 5:17', text: `For if by one man's offence death reigned by one; much more they which receive abundance of grace and of the gift of righteousness shall reign in life by one, Jesus Christ.` },
      { ref: '1 John 3:7', text: `Little children, let no man deceive you: he that doeth righteousness is righteous, even as he is righteous.` },
      { ref: '2 Corinthians 5:21', text: `For he hath made him to be sin for us, who knew no sin; that we might be made the righteousness of God in him.` },
      { ref: 'Psalm 11:7', text: `For the righteous LORD loveth righteousness; his countenance doth behold the upright.` },
      { ref: 'Isaiah 61:10', text: `He hath clothed me with the garments of salvation, he hath covered me with the robe of righteousness...` },
      { ref: 'Romans 14:17', text: `For the kingdom of God is not meat and drink; but righteousness, and peace, and joy in the Holy Ghost.` }
    ],
  
    deliverance: [
      { ref: 'Psalm 34:17', text: `The righteous cry, and the LORD heareth, and delivereth them out of all their troubles.` },
      { ref: 'Psalm 34:19', text: `Many are the afflictions of the righteous: but the LORD delivereth him out of them all.` },
      { ref: '2 Samuel 22:2', text: `The LORD is my rock, and my fortress, and my deliverer;` },
      { ref: 'Psalm 50:15', text: `And call upon me in the day of trouble: I will deliver thee, and thou shalt glorify me.` },
      { ref: 'Colossians 1:13', text: `Who hath delivered us from the power of darkness, and hath translated us into the kingdom of his dear Son:` },
      { ref: 'Psalm 107:6', text: `Then they cried unto the LORD in their trouble, and he delivered them out of their distresses.` },
      { ref: 'Daniel 6:27', text: `He delivereth and rescueth, and he worketh signs and wonders in heaven and in earth...` },
      { ref: 'Jeremiah 1:8', text: `Be not afraid of their faces: for I am with thee to deliver thee, saith the LORD.` },
      { ref: '2 Timothy 4:18', text: `And the Lord shall deliver me from every evil work, and will preserve me unto his heavenly kingdom...` },
      { ref: 'Psalm 18:19', text: `He brought me forth also into a large place; he delivered me, because he delighted in me.` }
    ],
  
    perseverance: [
      { ref: 'Romans 5:3-4', text: `Tribulation worketh patience; And patience, experience; and experience, hope:` },
      { ref: 'James 1:12', text: `Blessed is the man that endureth temptation: for when he is tried, he shall receive the crown of life...` },
      { ref: 'Hebrews 10:36', text: `For ye have need of patience, that, after ye have done the will of God, ye might receive the promise.` },
      { ref: '2 Thessalonians 3:13', text: `But ye, brethren, be not weary in well doing.` },
      { ref: 'Galatians 6:9', text: `And let us not be weary in well doing: for in due season we shall reap, if we faint not.` },
      { ref: 'Matthew 24:13', text: `But he that shall endure unto the end, the same shall be saved.` },
      { ref: 'Romans 8:25', text: `But if we hope for that we see not, then do we with patience wait for it.` },
      { ref: '1 Corinthians 9:24', text: `So run, that ye may obtain.` },
      { ref: 'Philippians 3:14', text: `I press toward the mark for the prize of the high calling of God in Christ Jesus.` },
      { ref: 'Revelation 2:10', text: `Be thou faithful unto death, and I will give thee a crown of life.` }
    ],
  
    renewal: [
      { ref: '2 Corinthians 4:16', text: `Though our outward man perish, yet the inward man is renewed day by day.` },
      { ref: 'Romans 12:2', text: `And be not conformed to this world: but be ye transformed by the renewing of your mind...` },
      { ref: 'Titus 3:5', text: `According to his mercy he saved us, by the washing of regeneration, and renewing of the Holy Ghost;` },
      { ref: 'Psalm 51:10', text: `Create in me a clean heart, O God; and renew a right spirit within me.` },
      { ref: 'Colossians 3:10', text: `And have put on the new man, which is renewed in knowledge after the image of him that created him:` },
      { ref: 'Isaiah 40:31', text: `They that wait upon the LORD shall renew their strength...` },
      { ref: 'Ephesians 4:23', text: `And be renewed in the spirit of your mind;` },
      { ref: 'Lamentations 5:21', text: `Turn thou us unto thee, O LORD, and we shall be turned; renew our days as of old.` },
      { ref: 'Psalm 103:5', text: `Who satisfieth thy mouth with good things; so that thy youth is renewed like the eagle's.` },
      { ref: 'Isaiah 61:3', text: `To appoint unto them that mourn in Zion... to give unto them beauty for ashes, the oil of joy for mourning...` }
    ],
  
    light: [
      { ref: 'John 8:12', text: `I am the light of the world: he that followeth me shall not walk in darkness, but shall have the light of life.` },
      { ref: 'Psalm 27:1', text: `The LORD is my light and my salvation; whom shall I fear? the LORD is the strength of my life; of whom shall I be afraid?` },
      { ref: '1 John 1:5', text: `God is light, and in him is no darkness at all.` },
      { ref: 'Matthew 5:14', text: `Ye are the light of the world. A city that is set on an hill cannot be hid.` },
      { ref: 'Psalm 119:105', text: `Thy word is a lamp unto my feet, and a light unto my path.` },
      { ref: 'Isaiah 60:1', text: `Arise, shine; for thy light is come, and the glory of the LORD is risen upon thee.` },
      { ref: 'Ephesians 5:8', text: `For ye were sometimes darkness, but now are ye light in the Lord: walk as children of light:` },
      { ref: 'Micah 7:8', text: `When I sit in darkness, the LORD shall be a light unto me.` },
      { ref: 'John 1:5', text: `And the light shineth in darkness; and the darkness comprehended it not.` },
      { ref: '2 Corinthians 4:6', text: `For God, who commanded the light to shine out of darkness, hath shined in our hearts...` }
    ],
  
    truth: [
      { ref: 'John 14:6', text: `I am the way, the truth, and the life: no man cometh unto the Father, but by me.` },
      { ref: 'John 8:32', text: `And ye shall know the truth, and the truth shall make you free.` },
      { ref: 'Psalm 25:5', text: `Lead me in thy truth, and teach me: for thou art the God of my salvation...` },
      { ref: 'John 17:17', text: `Sanctify them through thy truth: thy word is truth.` },
      { ref: 'Ephesians 6:14', text: `Stand therefore, having your loins girt about with truth, and having on the breastplate of righteousness;` },
      { ref: 'Zechariah 8:16', text: `These are the things that ye shall do; Speak ye every man the truth to his neighbour...` },
      { ref: 'Proverbs 12:19', text: `The lip of truth shall be established for ever: but a lying tongue is but for a moment.` },
      { ref: '3 John 1:4', text: `I have no greater joy than to hear that my children walk in truth.` },
      { ref: 'Psalm 119:160', text: `Thy word is true from the beginning: and every one of thy righteous judgments endureth for ever.` },
      { ref: 'Ephesians 4:15', text: `But speaking the truth in love, may grow up into him in all things, which is the head, even Christ:` }
    ],
  
    freedom: [
      { ref: 'John 8:36', text: `If the Son therefore shall make you free, ye shall be free indeed.` },
      { ref: '2 Corinthians 3:17', text: `Now the Lord is that Spirit: and where the Spirit of the Lord is, there is liberty.` },
      { ref: 'Galatians 5:1', text: `Stand fast therefore in the liberty wherewith Christ hath made us free, and be not entangled again with the yoke of bondage.` },
      { ref: 'Romans 6:22', text: `But now being made free from sin, and become servants to God, ye have your fruit unto holiness, and the end everlasting life.` },
      { ref: 'Psalm 118:5', text: `I called upon the LORD in distress: the LORD answered me, and set me in a large place.` },
      { ref: 'Romans 8:2', text: `For the law of the Spirit of life in Christ Jesus hath made me free from the law of sin and death.` },
      { ref: 'Isaiah 61:1', text: `The Spirit of the Lord GOD is upon me... to proclaim liberty to the captives.` },
      { ref: 'Galatians 5:13', text: `For, brethren, ye have been called unto liberty; only use not liberty for an occasion to the flesh, but by love serve one another.` },
      { ref: 'Psalm 119:45', text: `And I will walk at liberty: for I seek thy precepts.` },
      { ref: 'James 1:25', text: `Whoso looketh into the perfect law of liberty, and continueth therein... this man shall be blessed in his deed.` }
    ],
  
    presence: [
      { ref: 'Psalm 16:11', text: `Thou wilt shew me the path of life: in thy presence is fulness of joy; at thy right hand there are pleasures for evermore.` },
      { ref: 'Exodus 33:14', text: `My presence shall go with thee, and I will give thee rest.` },
      { ref: 'Psalm 140:13', text: `Surely the righteous shall give thanks unto thy name: the upright shall dwell in thy presence.` },
      { ref: 'Psalm 95:2', text: `Let us come before his presence with thanksgiving, and make a joyful noise unto him with psalms.` },
      { ref: 'Matthew 18:20', text: `For where two or three are gathered together in my name, there am I in the midst of them.` },
      { ref: 'Acts 3:19', text: `Repent ye therefore... when the times of refreshing shall come from the presence of the Lord;` },
      { ref: 'Psalm 97:5', text: `The hills melted like wax at the presence of the LORD, at the presence of the Lord of the whole earth.` },
      { ref: 'Psalm 31:20', text: `Thou shalt hide them in the secret of thy presence from the pride of man...` },
      { ref: 'Zephaniah 3:17', text: `The LORD thy God in the midst of thee is mighty; he will save, he will rejoice over thee with joy...` },
      { ref: 'Jude 1:24', text: `Now unto him that is able to keep you from falling, and to present you faultless before the presence of his glory with exceeding joy,` }
    ],
  
    zeal: [
      { ref: 'Romans 12:11', text: `Not slothful in business; fervent in spirit; serving the Lord;` },
      { ref: 'Titus 2:14', text: `Who gave himself for us... zealous of good works.` },
      { ref: 'Psalm 69:9', text: `For the zeal of thine house hath eaten me up...` },
      { ref: 'Galatians 4:18', text: `It is good to be zealously affected always in a good thing...` },
      { ref: 'John 2:17', text: `The zeal of thine house hath eaten me up.` },
      { ref: '2 Kings 10:16', text: `Come with me, and see my zeal for the LORD.` },
      { ref: 'Philippians 3:6', text: `Concerning zeal, persecuting the church...` },
      { ref: 'Isaiah 59:17', text: `... he put on the garments of vengeance for clothing, and was clad with zeal as a cloke.` },
      { ref: 'Isaiah 9:7', text: `Of the increase of his government and peace there shall be no end... The zeal of the LORD of hosts will perform this.` },
      { ref: '2 Corinthians 9:2', text: `...your zeal hath provoked very many.` }
    ],
  
    contentment: [
      { ref: 'Philippians 4:11', text: `For I have learned, in whatsoever state I am, therewith to be content.` },
      { ref: '1 Timothy 6:6', text: `But godliness with contentment is great gain.` },
      { ref: 'Hebrews 13:5', text: `Let your conversation be without covetousness; and be content with such things as ye have: for he hath said, I will never leave thee, nor forsake thee.` },
      { ref: 'Luke 3:14', text: `...And be content with your wages.` },
      { ref: '2 Corinthians 12:10', text: `Therefore I take pleasure in infirmities... for when I am weak, then am I strong.` },
      { ref: 'Psalm 37:16', text: `A little that a righteous man hath is better than the riches of many wicked.` },
      { ref: 'Proverbs 15:16', text: `Better is little with the fear of the LORD than great treasure and trouble therewith.` },
      { ref: 'Ecclesiastes 5:12', text: `The sleep of a labouring man is sweet...` },
      { ref: 'Philippians 4:12', text: `I know both how to be abased, and I know how to abound...` },
      { ref: 'Job 36:11', text: `If they obey and serve him, they shall spend their days in prosperity, and their years in pleasures.` }
    ],
  
    endurance: [
      { ref: '2 Timothy 2:3', text: `Thou therefore endure hardness, as a good soldier of Jesus Christ.` },
      { ref: 'Hebrews 12:1', text: `Let us run with patience the race that is set before us,` },
      { ref: 'James 1:12', text: `Blessed is the man that endureth temptation...` },
      { ref: 'Matthew 24:13', text: `But he that shall endure unto the end, the same shall be saved.` },
      { ref: 'Romans 12:12', text: `Rejoicing in hope; patient in tribulation; continuing instant in prayer;` },
      { ref: '2 Thessalonians 3:13', text: `But ye, brethren, be not weary in well doing.` },
      { ref: 'Colossians 1:11', text: `Strengthened with all might... unto all patience and longsuffering with joyfulness;` },
      { ref: 'Hebrews 10:36', text: `For ye have need of patience, that, after ye have done the will of God, ye might receive the promise.` },
      { ref: 'Romans 5:3-4', text: `Tribulation worketh patience; And patience, experience; and experience, hope:` },
      { ref: '2 Timothy 4:7', text: `I have fought a good fight, I have finished my course, I have kept the faith:` }
    ],
  
    assurance: [
      { ref: '1 John 5:13', text: `These things have I written unto you... that ye may know that ye have eternal life...` },
      { ref: 'Romans 8:16', text: `The Spirit itself beareth witness with our spirit, that we are the children of God:` },
      { ref: '2 Timothy 1:12', text: `For I know whom I have believed, and am persuaded that he is able to keep that which I have committed unto him against that day.` },
      { ref: 'Hebrews 10:22', text: `Let us draw near with a true heart in full assurance of faith...` },
      { ref: 'Colossians 2:2', text: `...unto all riches of the full assurance of understanding...` },
      { ref: 'Romans 8:38-39', text: `For I am persuaded, that neither death, nor life... shall be able to separate us from the love of God.` },
      { ref: 'Hebrews 6:11', text: `...the full assurance of hope unto the end:` },
      { ref: 'John 10:28', text: `And I give unto them eternal life; and they shall never perish, neither shall any man pluck them out of my hand.` },
      { ref: 'Philippians 1:6', text: `He which hath begun a good work in you will perform it until the day of Jesus Christ:` },
      { ref: 'Isaiah 32:17', text: `And the work of righteousness shall be peace; and the effect of righteousness quietness and assurance for ever.` }
    ],
  
    compassion: [
      { ref: 'Colossians 3:12', text: `Put on therefore... bowels of mercies, kindness, humbleness of mind, meekness, longsuffering;` },
      { ref: 'Ephesians 4:32', text: `Be ye kind one to another, tenderhearted, forgiving one another, even as God for Christ's sake hath forgiven you.` },
      { ref: '1 Peter 3:8', text: `...having compassion one of another, love as brethren, be pitiful, be courteous:` },
      { ref: 'Psalm 145:9', text: `The LORD is good to all: and his tender mercies are over all his works.` },
      { ref: 'Matthew 9:36', text: `...he was moved with compassion on them...` },
      { ref: 'Lamentations 3:22', text: `It is of the LORD'S mercies that we are not consumed, because his compassions fail not.` },
      { ref: 'Mark 6:34', text: `...and was moved with compassion toward them...` },
      { ref: 'Luke 10:33', text: `...when he saw him, he had compassion on him,` },
      { ref: 'Psalm 103:13', text: `Like as a father pitieth his children, so the LORD pitieth them that fear him.` },
      { ref: 'Jude 1:22', text: `And of some have compassion, making a difference:` }
    ],
  
    revival: [
      { ref: 'Psalm 85:6', text: `Wilt thou not revive us again: that thy people may rejoice in thee?` },
      { ref: 'Habakkuk 3:2', text: `O LORD, revive thy work in the midst of the years...` },
      { ref: 'Isaiah 57:15', text: `...with him also that is of a contrite and humble spirit, to revive the spirit of the humble...` },
      { ref: 'Psalm 80:18', text: `...quicken us, and we will call upon thy name.` },
      { ref: 'Hosea 6:2', text: `After two days will he revive us: in the third day he will raise us up, and we shall live in his sight.` },
      { ref: 'Psalm 119:25', text: `My soul cleaveth unto the dust: quicken thou me according to thy word.` },
      { ref: 'Psalm 138:7', text: `Though I walk in the midst of trouble, thou wilt revive me...` },
      { ref: 'Ezra 9:9', text: `...our God hath not forsaken us in our bondage... to give us a reviving...` },
      { ref: 'Psalm 119:50', text: `This is my comfort in my affliction: for thy word hath quickened me.` },
      { ref: '2 Kings 13:21', text: `...he revived, and stood up on his feet.` }
    ],
  
    obedience: [
      { ref: 'John 14:15', text: `If ye love me, keep my commandments.` },
      { ref: 'Deuteronomy 11:1', text: `...keep his charge, and his statutes, and his judgments, and his commandments, alway.` },
      { ref: 'Acts 5:29', text: `We ought to obey God rather than men.` },
      { ref: '1 Samuel 15:22', text: `Behold, to obey is better than sacrifice, and to hearken than the fat of rams.` },
      { ref: 'Isaiah 1:19', text: `If ye be willing and obedient, ye shall eat the good of the land:` },
      { ref: 'Romans 6:16', text: `...to whom ye yield yourselves servants to obey, his servants ye are to whom ye obey...` },
      { ref: 'Luke 11:28', text: `Blessed are they that hear the word of God, and keep it.` },
      { ref: 'Philippians 2:12', text: `Work out your own salvation with fear and trembling.` },
      { ref: '2 Corinthians 10:5', text: `...bringing into captivity every thought to the obedience of Christ;` },
      { ref: 'James 1:22', text: `But be ye doers of the word, and not hearers only, deceiving your own selves.` }
    ],
  
    holiness: [
      { ref: '1 Peter 1:15-16', text: `Be ye holy; for I am holy.` },
      { ref: 'Hebrews 12:14', text: `Follow peace with all men, and holiness, without which no man shall see the Lord:` },
      { ref: 'Leviticus 20:7', text: `Sanctify yourselves therefore, and be ye holy: for I am the LORD your God.` },
      { ref: '2 Corinthians 7:1', text: `...perfecting holiness in the fear of God.` },
      { ref: 'Romans 12:1', text: `Present your bodies a living sacrifice, holy, acceptable unto God, which is your reasonable service.` },
      { ref: 'Ephesians 4:24', text: `...the new man, which after God is created in righteousness and true holiness.` },
      { ref: 'Isaiah 35:8', text: `And an highway shall be there... it shall be called The way of holiness...` },
      { ref: 'Psalm 29:2', text: `Worship the LORD in the beauty of holiness.` },
      { ref: 'Colossians 3:12', text: `Put on therefore... meekness, longsuffering;` },
      { ref: '1 Thessalonians 4:7', text: `For God hath not called us unto uncleanness, but unto holiness.` }
    ],
  
    blessing: [
      { ref: 'Deuteronomy 28:2', text: `And all these blessings shall come on thee... if thou shalt hearken unto the voice of the LORD thy God.` },
      { ref: 'Numbers 6:24-26', text: `The LORD bless thee, and keep thee... and give thee peace.` },
      { ref: 'Psalm 1:1', text: `Blessed is the man that walketh not in the counsel of the ungodly...` },
      { ref: 'Ephesians 1:3', text: `...who hath blessed us with all spiritual blessings in heavenly places in Christ:` },
      { ref: 'Proverbs 10:22', text: `The blessing of the LORD, it maketh rich, and he addeth no sorrow with it.` },
      { ref: 'Malachi 3:10', text: `Bring ye all the tithes into the storehouse...` },
      { ref: 'Psalm 34:8', text: `O taste and see that the LORD is good: blessed is the man that trusteth in him.` },
      { ref: 'Luke 11:28', text: `Blessed are they that hear the word of God, and keep it.` },
      { ref: 'Psalm 115:13', text: `He will bless them that fear the LORD, both small and great.` },
      { ref: 'Jeremiah 17:7', text: `Blessed is the man that trusteth in the LORD, and whose hope the LORD is.` }
    ],
  
    overflow: [
      { ref: 'John 7:38', text: `He that believeth on me... out of his belly shall flow rivers of living water.` },
      { ref: 'Luke 6:38', text: `Give, and it shall be given unto you; good measure, pressed down, and shaken together, and running over...` },
      { ref: 'Psalm 23:5', text: `...thou anointest my head with oil; my cup runneth over.` },
      { ref: '2 Corinthians 9:8', text: `And God is able to make all grace abound toward you...` },
      { ref: 'Malachi 3:10', text: `...if I will not open you the windows of heaven, and pour you out a blessing...` },
      { ref: 'Ephesians 3:20', text: `Now unto him that is able to do exceeding abundantly above all that we ask or think, according to the power that worketh in us.` },
      { ref: 'Psalm 65:11', text: `Thou crownest the year with thy goodness; and thy paths drop fatness.` },
      { ref: 'Romans 15:13', text: `Now the God of hope fill you with all joy and peace in believing, that ye may abound in hope, through the power of the Holy Ghost.` },
      { ref: 'Joel 2:24', text: `And the floors shall be full of wheat, and the vats shall overflow with wine and oil.` },
      { ref: 'John 10:10', text: `I am come that they might have life, and that they might have it more abundantly.` }
    ],

    breakthrough: [
      { ref: '2 Samuel 5:20', text: `The LORD hath broken forth upon mine enemies before me, as the breach of waters.` },
      { ref: 'Isaiah 43:19', text: `Behold, I will do a new thing; now it shall spring forth; shall ye not know it? I will even make a way in the wilderness, and rivers in the desert.` },
      { ref: 'Micah 2:13', text: `The breaker is come up before them: they have broken up, and have passed through the gate.` },
      { ref: 'Acts 16:26', text: `And suddenly there was a great earthquake, so that the foundations of the prison were shaken: and immediately all the doors were opened, and every one’s bands were loosed.` },
      { ref: 'Joshua 6:20', text: `So the people shouted when the priests blew with the trumpets: and the wall fell down flat.` },
      { ref: 'Exodus 14:21', text: `And Moses stretched out his hand over the sea; and the LORD caused the sea to go back by a strong east wind.` },
      { ref: 'Judges 15:14', text: `The Spirit of the LORD came mightily upon him, and the cords that were upon his arms became as flax.` },
      { ref: 'Mark 2:11-12', text: `I say unto thee, Arise, and take up thy bed, and go thy way into thine house. And immediately he arose.` },
      { ref: '2 Kings 7:6', text: `For the LORD had made the host of the Syrians to hear a noise of chariots, and they fled.` },
      { ref: 'John 11:43-44', text: `He cried with a loud voice, Lazarus, come forth. And he that was dead came forth.` }
    ],

    "waiting": [
      { ref: 'Isaiah 40:31', text: `But they that wait upon the LORD shall renew their strength.` },
      { ref: 'Psalm 27:14', text: `Wait on the LORD: be of good courage, and he shall strengthen thine heart.` },
      { ref: 'Lamentations 3:25', text: `The LORD is good unto them that wait for him, to the soul that seeketh him.` },
      { ref: 'Micah 7:7', text: `I will wait for the God of my salvation: my God will hear me.` },
      { ref: 'Psalm 37:7', text: `Rest in the LORD, and wait patiently for him.` },
      { ref: 'Habakkuk 2:3', text: `Though it tarry, wait for it; because it will surely come, it will not tarry.` },
      { ref: 'Isaiah 30:18', text: `Blessed are all they that wait for him.` },
      { ref: 'Psalm 130:5', text: `I wait for the LORD, my soul doth wait, and in his word do I hope.` },
      { ref: 'Romans 8:25', text: `But if we hope for that we see not, then do we with patience wait for it.` },
      { ref: 'Psalm 62:5', text: `My soul, wait thou only upon God; for my expectation is from him.` }
    ],

    "casting-care": [
      { ref: '1 Peter 5:7', text: `Casting all your care upon him; for he careth for you.` },
      { ref: 'Psalm 55:22', text: `Cast thy burden upon the LORD, and he shall sustain thee.` },
      { ref: 'Matthew 6:25', text: `Take no thought for your life, what ye shall eat, or what ye shall drink.` },
      { ref: 'Matthew 6:34', text: `Take therefore no thought for the morrow: for the morrow shall take thought for the things of itself.` },
      { ref: 'Philippians 4:6', text: `Be careful for nothing; but in every thing by prayer and supplication with thanksgiving let your requests be made known unto God.` },
      { ref: 'Psalm 37:5', text: `Commit thy way unto the LORD; trust also in him; and he shall bring it to pass.` },
      { ref: 'Proverbs 16:3', text: `Commit thy works unto the LORD, and thy thoughts shall be established.` },
      { ref: 'Isaiah 41:10', text: `Fear thou not; for I am with thee: be not dismayed; for I am thy God.` },
      { ref: 'Psalm 34:17', text: `The righteous cry, and the LORD heareth, and delivereth them out of all their troubles.` },
      { ref: 'John 14:1', text: `Let not your heart be troubled: ye believe in God, believe also in me.` }
    ],

    "new-beginnings": [
      { ref: '2 Corinthians 5:17', text: `Therefore if any man be in Christ, he is a new creature.` },
      { ref: 'Isaiah 43:19', text: `Behold, I will do a new thing; now it shall spring forth.` },
      { ref: 'Ezekiel 36:26', text: `A new heart also will I give you, and a new spirit will I put within you.` },
      { ref: 'Revelation 21:5', text: `Behold, I make all things new.` },
      { ref: 'Lamentations 3:22-23', text: `It is of the LORD’S mercies that we are not consumed... They are new every morning: great is thy faithfulness.` },
      { ref: 'Philippians 3:13-14', text: `Forgetting those things which are behind, and reaching forth unto those things which are before.` },
      { ref: 'Genesis 1:1', text: `In the beginning God created the heaven and the earth.` },
      { ref: 'Psalm 40:3', text: `And he hath put a new song in my mouth, even praise unto our God.` },
      { ref: 'Romans 6:4', text: `Even so we also should walk in newness of life.` },
      { ref: 'Ezekiel 11:19', text: `And I will give them one heart, and I will put a new spirit within you.` }
    ],

    "peace-in-storm": [
      { ref: 'Mark 4:39', text: `And he arose, and rebuked the wind, and said unto the sea, Peace, be still.` },
      { ref: 'John 14:27', text: `Peace I leave with you, my peace I give unto you.` },
      { ref: 'Psalm 107:29', text: `He maketh the storm a calm, so that the waves thereof are still.` },
      { ref: 'Isaiah 41:10', text: `Fear thou not; for I am with thee: be not dismayed; for I am thy God.` },
      { ref: 'Philippians 4:7', text: `And the peace of God, which passeth all understanding, shall keep your hearts and minds through Christ Jesus.` },
      { ref: 'Matthew 8:26', text: `Why are ye fearful, O ye of little faith? Then he arose, and rebuked the winds and the sea; and there was a great calm.` },
      { ref: 'Nahum 1:7', text: `The LORD is good, a strong hold in the day of trouble; and he knoweth them that trust in him.` },
      { ref: 'Psalm 46:1-2', text: `God is our refuge and strength, a very present help in trouble. Therefore will not we fear.` },
      { ref: '2 Thessalonians 3:16', text: `Now the Lord of peace himself give you peace always by all means.` },
      { ref: 'Isaiah 26:3', text: `Thou wilt keep him in perfect peace, whose mind is stayed on thee.` }
    ],

    all: [
      { ref: 'Romans 8:28', text: `And we know that all things work together for good to them that love God.` },
      { ref: 'Psalm 23:1', text: `The LORD is my shepherd; I shall not want.` },
      { ref: 'John 3:16', text: `For God so loved the world, that he gave his only begotten Son.` },
      { ref: 'Philippians 4:13', text: `I can do all things through Christ which strengtheneth me.` },
      { ref: 'Jeremiah 29:11', text: `For I know the thoughts that I think toward you, saith the LORD, thoughts of peace, and not of evil.` },
      { ref: 'Isaiah 41:10', text: `Fear thou not; for I am with thee: be not dismayed; for I am thy God.` },
      { ref: 'Psalm 46:1', text: `God is our refuge and strength, a very present help in trouble.` },
      { ref: 'Romans 10:9', text: `If thou shalt confess with thy mouth the Lord Jesus, and shalt believe in thine heart that God hath raised him from the dead, thou shalt be saved.` },
      { ref: 'Matthew 6:33', text: `But seek ye first the kingdom of God, and his righteousness; and all these things shall be added unto you.` },
      { ref: 'Revelation 21:4', text: `And God shall wipe away all tears from their eyes; and there shall be no more death, neither sorrow, nor crying.` }
    ]
};

module.exports = { verses };
  