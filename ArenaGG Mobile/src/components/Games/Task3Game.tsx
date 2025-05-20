import React, { memo, useMemo, useState } from "react";
import { View } from "react-native";
import { IconButton, Text } from "react-native-paper";
import { colors } from "../../constants/AppStyle";
import { IconList } from "../../constants/IconList";
import { generateRandomNumberList } from "../../utils/generateRandomNumberList";

const widthTable: Record<number, number> = {
  3: 8,
  4: 7,
  5: 6,
  6: 5,
  7: 4.4,
};

export const TabButton = ({
  active,
  baseWidth,
  iconSource: { icon = "", color },
  visible,
  onClick,
  success,
  hasIcon,
}: {
  active: boolean;
  success: boolean;
  iconSource: { icon?: string; color?: string };
  baseWidth: number;
  visible: boolean;
  onClick: () => void;
  hasIcon?: boolean;
}) => {
  let backgroundColor = active ? colors["gray-300"] : colors.white;
  let displayIcon = "";
  let displayColor = color;

  // ORIGINAL: Only show icon after memorization phase, not during
  if (!visible && hasIcon) {
    displayIcon = icon;
    displayColor = color;
  }
  if (success) {
    backgroundColor = colors["green-400"];
    displayIcon = "check";
    displayColor = colors.white;
  } else if (success === false && !visible && hasIcon) {
    backgroundColor = colors["red-400"];
    displayIcon = "window-close";
    displayColor = colors.white;
  }

  return (
    <IconButton
      icon={displayIcon}
      iconColor={displayColor}
      size={baseWidth * 8}
      style={{
        marginHorizontal: baseWidth * 0.5,
        marginVertical: baseWidth * 0.5,
        borderRadius: baseWidth,
        width: baseWidth * 10,
        height: baseWidth * 10,
        backgroundColor,
      }}
      onPress={visible || !active || success ? undefined : onClick}
    />
  );
};

export const Task3Game: React.FC<{
  cards: number;
  images: number;
  countDown: number;
  grid: number;
  onSuccess: () => void;
  onError: () => void;
  [x: string]: any;
}> = memo(({ cards, images, grid, countDown, onSuccess, onError }) => {
  const visible = countDown > 0;
  const [iconIdx, setIconIdx] = useState(0);
  const baseWidth = widthTable[grid];

  // Precompute active cards
  const activeCards = useMemo(
    () => Array.from(generateRandomNumberList(cards, grid * grid)),
    [cards, grid]
  );

  // Precompute which active card gets which icon
  const [activeImages, icons] = useMemo(() => {
    const activeImagesSet = generateRandomNumberList(images, cards);
    const iconIndices = Array.from(generateRandomNumberList(images, IconList.length));
    const iconList = iconIndices.map((x) => IconList[x]);
    // Map: cardIdx -> iconIdx (only for active cards that have an icon)
    const cardToIconIdx: Record<number, number> = {};
    let iconCounter = 0;
    activeCards.forEach((cardIdx, i) => {
      if (activeImagesSet.has(i)) {
        cardToIconIdx[cardIdx] = iconCounter;
        iconCounter++;
      }
    });
    return [activeImagesSet, iconList, cardToIconIdx] as const;
  }, [images, cards, activeCards]);

  const cardToIconIdx = icons[2] || {}; // icons[2] is cardToIconIdx
  const iconList = icons[1] || [];

  return (
    <>
      {visible ? (
        <Text
          style={{
            marginTop: -100,
            marginBottom: 75,
            fontSize: 32,
            height: baseWidth * 10 + 16,
          }}
        >
          {countDown}
        </Text>
      ) : (
        <View style={{ alignItems: "center", marginBottom: 20 }}>
          <Text style={{ fontSize: 20, marginBottom: 10, color: colors["blue-600"] }}>
            Tap the card with this icon:
          </Text>
          <IconButton
            icon={iconList[iconIdx]?.icon}
            style={{
              marginTop: 0,
              marginBottom: 0,
              backgroundColor: colors["gray-200"],
              borderRadius: 40,
              alignSelf: "center",
            }}
            size={baseWidth * 10}
            iconColor={iconList[iconIdx]?.color}
          />
        </View>
      )}
      <View
        style={{
          marginBottom: 20,
          flexDirection: "row",
          width: 300,
        }}
      >
        <Text style={{ flex: 1 }} variant="titleMedium">
          Cards: {cards}
        </Text>
        <Text variant="titleMedium">Images: {images}</Text>
      </View>
      <View
        style={{
          flexWrap: "wrap",
          flexDirection: "row",
          alignItems: "center",
          width: baseWidth * 11 * grid,
          height: baseWidth * 11 * grid,
        }}
      >
        {Array(grid * grid)
          .fill(0)
          .map((_, idx) => {
            const isActive = activeCards.includes(idx);
            const iconIdxForCard = cardToIconIdx[idx];
            const hasIcon = typeof iconIdxForCard === "number";
            return (
              <TabButton
                onClick={() => {
                  if (iconIdxForCard === iconIdx) {
                    if (iconIdx === images - 1) onSuccess();
                    else setIconIdx((i) => i + 1);
                  } else {
                    onError();
                    return;
                  }
                }}
                visible={visible}
                active={isActive}
                success={hasIcon && iconIdxForCard < iconIdx}
                iconSource={hasIcon ? iconList[iconIdxForCard] : {}}
                hasIcon={hasIcon}
                key={idx}
                baseWidth={baseWidth}
              />
            );
          })}
      </View>
    </>
  );
});
